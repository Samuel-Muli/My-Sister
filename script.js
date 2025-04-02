document.addEventListener('DOMContentLoaded', () => {
    let birthdayReached = false;
    const countdownElement = document.getElementById('countdown');
    const videoContainer = document.getElementById('videoContainer');
    const birthdayDate = new Date('April 7, 2025 00:00:00');

    function updateCountdown() {
        const now = new Date();
        const diff = birthdayDate - now;

        if (diff <= 0 && !birthdayReached) {
            birthdayReached = true;
            countdownElement.innerHTML = "🎉🎂 Happy Birthday Rosemary! 🎈🎊";
            showBirthdayVideo();
            startCelebration();
        } else if (!birthdayReached) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            countdownElement.innerHTML = `🎈 ${days} Days ${hours} Hours Until Your Special Day! 🎉`;
        }
    }
    function createFlowers() {
    const container = document.querySelector('.container');
    const flowerEmojis = ['🌸', '🌺', '🌻', '🌷', '💮'];
    
    for(let i = 0; i < 15; i++) {
        const flower = document.createElement('div');
        flower.className = `flower flower${i%3 + 1}`;
        flower.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 20}px;
            animation-delay: ${Math.random() * 5}s;
        `;
        flower.textContent = flowerEmojis[i%5];
        container.appendChild(flower);
    }
}

// Modified startCelebration
function startCelebration() {
    const colors = ['#ff69b4', '#ff1493', '#ff4500', '#ffd700'];
    setInterval(() => {
        document.body.style.background = `linear-gradient(45deg, 
            ${colors[Math.floor(Math.random() * colors.length)]},
            ${colors[Math.floor(Math.random() * colors.length)]})`;
    }, 1500);
    
    // Add sparkling effect
    document.querySelectorAll('.moving-text').forEach(text => {
        text.style.animation = 'sparkle 1.5s infinite';
    });
}

// Initialize all elements
document.addEventListener('DOMContentLoaded', () => {
    createFlowers();
    createConfetti();
    // Rest of your initialization code
});

    function showBirthdayVideo() {
        if (!videoContainer.innerHTML) {
            videoContainer.innerHTML = `
                <iframe src="https://www.youtube.com/embed/5u4xTa3LR2U?autoplay=1&mute=0&rel=0&enablejsapi=1" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>`;
        }
        videoContainer.classList.add('active');
    }

    // Keep other functions (createConfetti, startCelebration) the same
    // ...

    // Initial setup
    updateCountdown();
    const countdownInterval = setInterval(() => {
        if (!birthdayReached) updateCountdown();
        else clearInterval(countdownInterval);
    }, 1000);
    createConfetti();
});