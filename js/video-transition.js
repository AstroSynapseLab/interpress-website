document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-bg');
    let currentVideoIndex = 0;
    const transitionInterval = 5000; // 5 seconds between transitions

    function switchVideo() {
        // Remove active class from current video
        videos[currentVideoIndex].classList.remove('active');
        
        // Move to next video
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        
        // Add active class to new video
        videos[currentVideoIndex].classList.add('active');
        
        // Ensure the new video is playing
        videos[currentVideoIndex].play();
    }

    // Start the transition cycle
    setInterval(switchVideo, transitionInterval);

    // Start with first video
    videos[0].classList.add('active');
    videos[0].play();
}); 