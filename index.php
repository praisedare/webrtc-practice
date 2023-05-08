<?php
    require_once  'src/php/functions.php';
    $callId = @getUrlQueries()->call_id;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        * {
            box-sizing: border-box;
        }
        html, body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <?php /* <pre> <?= var_dump($_SERVER) ?> </pre> */ ?>
    <div style="padding: 1em">
        <div class="videos-container" style="display: flex;">
            <div>
                <video id="remote_video" autoplay style="background-color: black;"></video>
                <p>Friend</p>
            </div>
            <div>
                <canvas id="video_canvas"></canvas>
                <p>You</p>
            </div>
            <video id="video" style="position: fixed; top: -9999px; left: -9999px;" autoplay muted></video>
        </div>

        <br>

        <input type="text" id="call_id" value="<?= $callId ?>" hidden>
        <br>
        <input type="text" id="call_link" placeholder="Call Link" style="background-color: #efefef; color: black; padding: 5px; border: 1px solid black; width: 100%;" hidden />

        <button id="create_call" hidden>Create Call</button>
        <button id="answer_call" hidden>Answer Call</button>
    </div>

    <script src="<?= vite_asset('src/js/main.ts') ?>"></script>
</body>
</html>
