

alert(`This application needs new version of browsers. If you are using Windows use latest version of Edge.
 Make sure applications have permission to access your device camera.
  On windows you can allow permission from Settings -> Privacy -> Camera -> Allow apps to access camera.`);


async function startCamera() {
    const video = document.getElementById('video');

    try {
        video.srcObject = await navigator.mediaDevices.getUserMedia({video: true});
    } catch (error) {
        console.error('Error accessing the camera: ', error);
    }
}

function capturePhoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Display the canvas
    canvas.style.display = 'block';
}

document.getElementById('capture').addEventListener('click', capturePhoto);

window.onload = async () => {
    await startCamera();
}
