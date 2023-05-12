const fs = require('node:fs')
const http = require('node:http')
const https = require('node:https')
const httpProxy = require('http-proxy')

// Start turn server
const Turn = require('node-turn')
const path = require('node:path')
const turnServer = new Turn({
    authMech: 'long-term',
    credentials: {
        user: 'pass',
    },
})
turnServer.start()

const server = https.createServer(
    {
        key: fs.readFileSync('/Users/rhotty/stuff/certificates/privatekey.pem'),
        cert: fs.readFileSync('/Users/rhotty/stuff/certificates/certificate.pem')
    },
    (req, res) => {
        // res.write('hello')
        // res.end()
        
        console.log('Captured proxy')
        proxy.web(req, res, { target: 'http://localhost:3478' })
    }
)
server.listen(8080, () => {
    console.log('Node HTTPS Server Running on :8080')
})
server.on('request', () => {
    console.log('request received')
})

const proxy = httpProxy.createProxyServer()
proxy.on('proxyReq', (proxyReq, req, res, options) => {
    console.log('onproxyreq')
    const timeoutMillis = 5000

    // Set a timeout for the proxy request
    proxyReq.setTimeout(timeoutMillis, () => {
        proxyReq.abort()
        res.writeHead(504, { 'Content-Type': 'text/plain' })
        res.end('Gateway Timeout')
    })
})
proxy.on('proxyReqWS', (proxyReq, req, res, options) => {
    console.log('onproxyreqws')
    const timeoutMillis = 5000

    // Set a timeout for the proxy request
    proxyReq.setTimeout(timeoutMillis, () => {
        proxyReq.abort()
        res.writeHead(504, { 'Content-Type': 'text/plain' })
        res.end('Gateway Timeout')
    })
})
