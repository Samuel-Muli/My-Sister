document.addEventListener('DOMContentLoaded', () => {
    let birthdayReached = false;
    const countdownElement = document.getElementById('countdown');
    const mediaContainer = document.querySelector('.media-container');
    const birthdayDate = new Date('April 7, 2025 00:00:00');
    const card = document.querySelector('.card');

    // Initialize media based on date
    function initializeMedia() {
        const today = new Date();
        if (today >= birthdayDate) {
            showBirthdayVideo();
        } else {
            showMusicWidget();
        }
    }

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

    function showBirthdayVideo() {
        mediaContainer.innerHTML = `
        <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/5u4xTa3LR2U?autoplay=1&mute=0&rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        </div>`;
    }

    function showMusicWidget() {
        mediaContainer.innerHTML = `
        <div class="music-widget-wrapper">
            <iframe src="https://mdundo.com/widget_song/3180651" 
                    frameborder="0" 
                    height="125" 
                    width="100%"></iframe>
        </div>`;
    }

    function createOrbitingFlowers() {
        const flowersContainer = document.getElementById('flowers-container');
        const flowerEmojis = ['🌸', '🌺', '🌻', '🌷', '💮'];
        const cardRect = card.getBoundingClientRect();
        const radius = cardRect.width * 0.8;

        for(let i = 0; i < 24; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 20}px;
                animation: orbit ${15 + Math.random() * 15}s linear infinite;
                --angle: ${(i * 15)}deg;
                --radius: ${radius}px;
            `;
            flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
            flowersContainer.appendChild(flower);
        }
    }

    function createConfetti() {
        const container = document.createElement('div');
        container.className = 'confetti-container';
        for(let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                left: ${Math.random() * 100}%;
                background-color: hsl(${Math.random() * 360}, 100%, 50%);
                animation-delay: ${Math.random() * 2}s;
            `;
            container.appendChild(confetti);
        }
        document.body.appendChild(container);
    }

    function createFireworks() {
        const container = document.getElementById('fireworks-container');
        for(let i = 0; i < 15; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 3}s;
            `;
            container.appendChild(firework);
        }
    }

    function startCelebration() {
        // Background animation
        const colors = ['#ff69b4', '#ff1493', '#ff4500', '#ffd700'];
        setInterval(() => {
            document.body.style.background = `linear-gradient(45deg, 
                ${colors[Math.floor(Math.random() * colors.length)]},
                ${colors[Math.floor(Math.random() * colors.length)]})`;
        }, 1500);

        // Sparkle text
        document.querySelectorAll('.moving-text').forEach(text => {
            text.style.animation = 'sparkle 1.5s infinite';
        });

        // Party effects
        createConfetti();
        createFireworks();
    }

    // Initial setup
    initializeMedia();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createOrbitingFlowers();
});