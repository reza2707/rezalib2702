document.addEventListener('DOMContentLoaded', function() {
    // Debug log
    console.log('Script loaded');

    // Get elements
    const audioElement = document.getElementById('audio-element');
    const playBtn = document.querySelector('.play-btn');
    const volumeSlider = document.querySelector('.volume-slider');
    const progress = document.querySelector('.progress');
    const progressBar = document.querySelector('.progress-bar');
    const audioDuration = document.querySelector('.audio-duration');

    // Debug log
    console.log('Audio element:', audioElement);
    console.log('Play button:', playBtn);

    // Check if audio is loaded
    audioElement.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully');
    });

    // Check for audio errors
    audioElement.addEventListener('error', (e) => {
        console.error('Audio error:', e);
    });

    // Play/Pause
    playBtn.addEventListener('click', function() {
        console.log('Play button clicked');
        if (audioElement.paused) {
            // Try to play and catch any errors
            audioElement.play().catch(function(error) {
                console.log("Play failed:", error);
            });
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioElement.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Volume Control
    volumeSlider.addEventListener('input', (e) => {
        audioElement.volume = e.target.value / 100;
    });

    // Update progress bar
    audioElement.addEventListener('timeupdate', () => {
        const percent = (audioElement.currentTime / audioElement.duration) * 100;
        progress.style.width = percent + '%';
        
        // Update duration display
        const currentTime = formatTime(audioElement.currentTime);
        const duration = formatTime(audioElement.duration);
        audioDuration.textContent = `${currentTime} / ${duration}`;
    });

    // Click on progress bar to seek
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioElement.currentTime = percent * audioElement.duration;
    });

    // Helper function to format time
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}); 