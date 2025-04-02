document.addEventListener('DOMContentLoaded', () => {
    let birthdayReached = false;
    const countdownElement = document.getElementById('countdown');
    const mediaContainer = document.querySelector('.media-container');
    const birthdayDate = new Date('April 2, 2025 00:00:00');
  
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
        showMusicWidget();
      }
    }
    
    function showBirthdayVideo() {
      mediaContainer.innerHTML = `
        <div class="video-wrapper active">
          <iframe src="https://www.youtube.com/embed/5u4xTa3LR2U?autoplay=1&mute=0&rel=0&enablejsapi=1" 
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
    
    function createFlowers() {
      const flowersContainer = document.getElementById('flowers-container');
      const flowerEmojis = ['🌸', '🌺', '🌻', '🌷', '💮'];
      for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = `flower flower${i % 3 + 1}`;
        flower.style.cssText = `
          left: ${Math.random() * 90 + 5}%;
          top: ${Math.random() * 90 + 5}%;
          font-size: ${Math.random() * 20 + 20}px;
          animation-delay: ${Math.random() * 5}s;
        `;
        flower.textContent = flowerEmojis[i % flowerEmojis.length];
        flowersContainer.appendChild(flower);
      }
    }
    
    function createFireworks() {
      const fireworksContainer = document.getElementById('fireworks-container');
      // Create several fireworks elements at random positions along the edges
      for (let i = 0; i < 15; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        // Position them randomly near the edges
        const posX = Math.random() < 0.5 ? Math.random() * 10 : 90 + Math.random() * 10;
        const posY = Math.random() < 0.5 ? Math.random() * 10 : 90 + Math.random() * 10;
        firework.style.left = posX + '%';
        firework.style.top = posY + '%';
        firework.style.animationDelay = Math.random() * 3 + 's';
        fireworksContainer.appendChild(firework);
      }
    }
    
    function startCelebration() {
      // Change background colors for a celebration effect
      const colors = ['#ff69b4', '#ff1493', '#ff4500', '#ffd700'];
      setInterval(() => {
        document.body.style.background = `linear-gradient(45deg, 
            ${colors[Math.floor(Math.random() * colors.length)]},
            ${colors[Math.floor(Math.random() * colors.length)]})`;
      }, 1500);
      
      // Add sparkle effect to moving text
      document.querySelectorAll('.moving-text').forEach(text => {
        text.style.animation = 'sparkle 1.5s infinite';
      });
      
      // Create fireworks
      createFireworks();
    }
    
    // Initial setup
    updateCountdown();
    const countdownInterval = setInterval(() => {
      if (!birthdayReached) updateCountdown();
      else clearInterval(countdownInterval);
    }, 1000);
    
    createFlowers();
  });
  