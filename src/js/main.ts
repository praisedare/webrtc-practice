import { addDoc, collection, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase_init"

const videoCanvas = <HTMLCanvasElement>document.getElementById('video_canvas'),
    ctx = videoCanvas.getContext('2d')!,
    createCallBtn = <HTMLButtonElement>document.querySelector('#create_call'),
    answerCallBtn = <HTMLButtonElement>document.querySelector('#answer_call'),
    hangupBtn = <HTMLButtonElement>document.querySelector('#hangup'),
    callIdInput = <HTMLInputElement>document.querySelector('#call_id'),
    callLinkInput = <HTMLInputElement>document.querySelector('#call_link'),
    videoElem = <HTMLVideoElement>document.querySelector('#video'),
    remoteVideo = <HTMLVideoElement>document.getElementById('remote_video');

if (callIdInput.value) {
    answerCallBtn.removeAttribute('hidden')
} else {
    createCallBtn.removeAttribute('hidden')
    callLinkInput.removeAttribute('hidden')
}

createCallBtn.onclick = createCall
answerCallBtn.onclick = answerCall
hangupBtn.onclick = endCall

const pc = new RTCPeerConnection({
    iceServers: [
        {
            "urls": "stun://localhost:8180",
            "username": 'user',
            "credential": 'pass',
        },

        // {
        //     "urls": "stun:a.relay.metered.ca:80"
        // },
        // {
        //     "urls": "turn:a.relay.metered.ca:80",
        //     "username": "13dd810dcac30bd7ee24ea93",
        //     "credential": "pp4k9WA3rMYxz1u0"
        // },

        // {
        //     "urls": "turn:a.relay.metered.ca:80?transport=tcp",
        //     "username": "13dd810dcac30bd7ee24ea93",
        //     "credential": "pp4k9WA3rMYxz1u0"
        // },
        // {
        //     "urls": "turn:a.relay.metered.ca:443",
        //     "username": "13dd810dcac30bd7ee24ea93",
        //     "credential": "pp4k9WA3rMYxz1u0"
        // },
        // {
        //     "urls": "turn:a.relay.metered.ca:443?transport=tcp",
        //     "username": "13dd810dcac30bd7ee24ea93",
        //     "credential": "pp4k9WA3rMYxz1u0"
        // }
    ],
    // iceServers: [
    //     "stun:stun3.l.google.com:19302",
    //     "stun:stun4.l.google.com:19302"
    // ],
    iceCandidatePoolSize: 10,
})

pc.addEventListener('connectionstatechange', function(event) {
    let connectionState = event.target!.connectionState
    if (['closed', 'disconnected'].includes(connectionState)) {
        removeVideoElements()
    }
})

let localStream: MediaStream
let remoteStream: MediaStream

async function beginVideoCapture() {
    let mediaStream: MediaStream
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    } catch (e) {
        return null
    }

    localStream = videoElem.srcObject = mediaStream
    remoteStream = remoteVideo.srcObject = new MediaStream
    

    // Push tracks from local stream to peer connection
    localStream.getTracks().forEach(track => pc.addTrack(track, localStream))

    Object.assign(window, { localStream })

    // Pull tracks from remote stream, add to video stream
    pc.ontrack = (event) => {
        console.log('received track', event)
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track);
        });
    };

    setTimeout(() => setVideoPlayerDimensions(), 1000)

    drawVideo()

    return mediaStream
}

function setVideoPlayerDimensions() {
    const dimensions = videoElem.getBoundingClientRect()
    videoCanvas.width = dimensions.width / 2
    videoCanvas.height = dimensions.height / 2
    console.log('set dimensions to', dimensions)
}

function drawVideo() {
    ctx.setTransform(-0.5, 0, 0, 0.5, videoCanvas.width, 0)
    ctx.drawImage(videoElem, 0, 0)
    requestAnimationFrame(drawVideo)
}

async function createCall() {
    let videoStream = await beginVideoCapture()
    if (! videoStream) {
        alert('Cannot begin video stream without camera access')
        return
    }

    const callDocRef = await addDoc(collection(db, 'calls'), {})

    callLinkInput.value = window.location + '?call_id=' + callDocRef.id

    let offerCandidates = collection(callDocRef, 'offerCandidates')
    let answerCandidates = collection(callDocRef, 'answerCandidates')

    pc.onicecandidate = (event) => {
        event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
    }
    await setDoc(callDocRef, { offer });

    // Listen for remote answer
    onSnapshot(callDocRef, snapshot => {
        console.log('change detected in call doc')
        let data = snapshot.data()
        if (!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
        }
    })

    // When answered, add candidate to peer connection
    onSnapshot(answerCandidates, (snapshot) => {
        console.log('answer detected', snapshot)
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                const candidate = new RTCIceCandidate(change.doc.data());
                pc.addIceCandidate(candidate);
            }
        });
    });


}

// 3. Answer the call with the unique ID
async function answerCall() {
    let videoStream = await beginVideoCapture()
    if (! videoStream) {
        alert('Cannot begin video stream without camera access')
        return
    }

    console.log('answering call')
    const callId = callIdInput.value
    const callDoc = doc(collection(db, 'calls'), callId)
    const answerCandidates = collection(callDoc, 'answerCandidates')
    const offerCandidates = collection(callDoc, 'offerCandidates')

    pc.onicecandidate = (event) => {
        event.candidate && addDoc(answerCandidates, event.candidate.toJSON())
    };

    const callData = (await getDoc(callDoc)).data()
    console.log('callData', callData)

    const offerDescription = callData.offer
    let rcd = new RTCSessionDescription(offerDescription)
    console.log('rcd', rcd)
    await pc.setRemoteDescription(rcd)

    const answerDescription = await pc.createAnswer()
    await pc.setLocalDescription(answerDescription)


    const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
    }

    await updateDoc(callDoc, { answer })

    onSnapshot(offerCandidates, (snapshot) => {
        console.log('offerCandidatesSnapshot watcher')
        snapshot.docChanges().forEach((change) => {
            console.log('offerCandidates change', change)
            if (change.type === 'added') {
                let data = change.doc.data()
                pc.addIceCandidate(new RTCIceCandidate(data))
            }
        })
    })
}

function endCall() {
    pc.close()
    localStream.getTracks().forEach(track => track.stop())

    removeVideoElements()
}

function removeVideoElements() {
    videoElem.srcObject = null
    videoElem.remove()
    remoteVideo.srcObject = null
    remoteVideo.remove()
}

function addDataToFirestoreCollection(collectionName: string, data: Object) {
    return addDoc(collection(db, collectionName), data)
}

Object.assign(window, {
    addDoc, collection, doc, setDoc, firestore: db,
    addDataToFirestoreCollection,
})

