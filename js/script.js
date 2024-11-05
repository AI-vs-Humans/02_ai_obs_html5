let videoStream;
let audioStream;

async function startStreaming() {
    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

        const videoElement = document.getElementById('video');
        videoElement.srcObject = videoStream;

        const audioElement = document.getElementById('audio');
        audioElement.srcObject = audioStream;
    } catch (err) {
        console.error('Error accessing media devices.', err);
    }
}

function stopStreaming() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
    }
}
