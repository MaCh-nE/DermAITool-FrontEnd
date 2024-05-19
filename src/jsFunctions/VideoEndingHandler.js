const VideoEndingHandler = () => {

    const video = document.getElementById('intro-vid');
    const formBox = document.getElementById('form-box');
    const image = document.getElementById('image');

    const handleVideoEnd = () => {
        // Hide the video
        video.style.display = 'none';

        // Display the form and image
        formBox.style.display = 'block';
        image.style.display = 'block';
    }

    video.addEventListener('ended', handleVideoEnd);

    // Clean up the event listener
    return () => {
        video.removeEventListener('ended', handleVideoEnd);
    }
}

export default VideoEndingHandler;