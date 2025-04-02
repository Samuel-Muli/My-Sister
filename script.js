document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const videoContainer = document.getElementById('videoContainer');
    const birthdayDate = new Date('April 2, 2025 00:00:00');

    function updateCountdown() {
        const now = new Date();
        const diff = birthdayDate - now;

        if (diff <= 0) {
            countdownElement.innerHTML = "🎉🎂 Happy Birthday Rosemary! 🎈🎊";
            showBirthdayVideo();
            startCelebration();
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            countdownElement.innerHTML = `🎈 ${days} Days ${hours} Hours Until Your Special Day! 🎉`;
        }
    }

    function showBirthdayVideo() {
        videoContainer.style.display = 'block';
        videoContainer.innerHTML = `
            <iframe src="https://www.youtube.com/embed/5u4xTa3LR2U?autoplay=1&mute=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>`;
    }

    function createConfetti() {
        const container = document.querySelector('.decoration');
        const confettiCount = window.innerWidth < 480 ? 30 : 50;
        
        for(let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                left: ${Math.random() * 100}vw;
                animation-duration: ${Math.random() * 3 + 2}s;
                background-color: hsl(${Math.random() * 360}, 100%, 50%);
            `;
            container.appendChild(confetti);
        }
    }

    function startCelebration() {
        const colors = ['#ff69b4', '#ff1493', '#ff4500', '#ffd700'];
        setInterval(() => {
            document.body.style.background = `linear-gradient(45deg, 
                ${colors[Math.floor(Math.random() * colors.length)]},
                ${colors[Math.floor(Math.random() * colors.length)]})`;
        }, 1000);
    }

    // Initial setup
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createConfetti();
});