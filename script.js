function getThumbnail() {
    const videoUrl = document.getElementById('videoUrl').value;
    const thumbnailImage = document.getElementById('thumbnailImage');

    // Extract video ID from the URL
    const videoId = videoUrl.match(/v=([a-zA-Z0-9_-]+)/);

    if (videoId) {
        const thumbnailUrl = `https://i3.ytimg.com/vi/${videoId[1]}/maxresdefault.jpg`;
        thumbnailImage.src = thumbnailUrl;
    } else {
        alert('Invalid YouTube URL. Please use a valid video URL.');
    }
}
