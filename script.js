document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const birthdayDate = new Date('April 3, 2025 00:00:00');
    const elements = {
        countdown: document.getElementById('countdown'),
        mediaContainer: document.querySelector('.media-container'),
        card: document.querySelector('.card'),
        flowersContainer: document.getElementById('flowers-container'),
        fireworksContainer: document.getElementById('fireworks-container')
    };
    
    let birthdayReached = false;

    // Media Control
    function initializeMedia() {
        const today = new Date();
        if (today >= birthdayDate) {
            showBirthdayVideo();
            startCelebration();
        } else {
            showMusicWidget();
        }
    }

    function showBirthdayVideo() {
        elements.mediaContainer.innerHTML = `
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/5u4xTa3LR2U?autoplay=1&mute=0&rel=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            </div>`;
    }

    function showMusicWidget() {
        elements.mediaContainer.innerHTML = `
            <div class="music-widget-wrapper">
                <iframe src="https://mdundo.com/widget_song/3180651" 
                        frameborder="0" 
                        height="125" 
                        width="100%"></iframe>
            </div>`;
    }

    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const diff = birthdayDate - now;

        if (diff <= 0 && !birthdayReached) {
            birthdayReached = true;
            elements.countdown.innerHTML = "🎉🎂 Happy Birthday Rosemary! 🎈🎊";
            showBirthdayVideo();
            startCelebration();
        } else if (!birthdayReached) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            elements.countdown.innerHTML = `🎈 ${days} Days ${hours} Hours Until Your Special Day! 🎉`;
        }
    }

    // Visual Effects
    function createFloatingFlowers() {
        const flowerEmojis = ['🌸', '🌺', '🌻', '🌷', '💮'];
        for(let i = 0; i < 25; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.style.cssText = `
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 20 + 20}px;
                animation-delay: ${Math.random() * 5}s;
            `;
            flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
            elements.flowersContainer.appendChild(flower);
        }
    }

    function createFireworks() {
        for(let i = 0; i < 15; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 3}s;
            `;
            elements.fireworksContainer.appendChild(firework);
        }
    }

    function startCelebration() {
        const colors = ['#ff69b4', '#ff1493', '#ff4500', '#ffd700'];
        setInterval(() => {
            document.body.style.background = `linear-gradient(45deg, 
                ${colors[Math.floor(Math.random() * colors.length)]},
                ${colors[Math.floor(Math.random() * colors.length)]})`;
        }, 1500);

        document.querySelectorAll('.moving-text').forEach(text => {
            text.style.animation = 'sparkle 1.5s infinite';
        });

        createFireworks();
    }

    // Initialization
    initializeMedia();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createFloatingFlowers();
});