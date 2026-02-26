document.addEventListener("DOMContentLoaded", () => {
    // Sprawdzamy, czy kotek jest włączony w pamięci przeglądarki
    if (localStorage.getItem('kotekWlaczony') !== 'true') return;

    const cat = document.createElement('div');
    cat.id = 'kot-asystent';
    // DODANA ZMIANA: Rozdzielamy obrót od biegania na dwa osobne divy
    cat.innerHTML = '<div class="kot-flip"><div class="kot-sprite">🐈</div></div>';
    document.body.appendChild(cat);

    const style = document.createElement('style');
    style.innerHTML = `
        #kot-asystent {
            position: fixed;
            pointer-events: none;
            z-index: 99999;
            transform: translate(-50%, -50%);
            will-change: left, top;
        }
        /* Kontener odpowiedzialny TYLKO za obrót w lewo/prawo */
        .kot-flip {
            transition: transform 0.15s ease;
            display: inline-block;
        }
        /* Kontener odpowiedzialny TYLKO za podskakiwanie przy biegu */
        .kot-sprite {
            font-size: 45px;
            line-height: 1;
            display: inline-block;
        }
        @keyframes kotBieg {
            0% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-4px) rotate(-8deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(-4px) rotate(8deg); }
            100% { transform: translateY(0) rotate(0deg); }
        }
        .biegnie {
            animation: kotBieg 0.25s infinite;
        }
    `;
    document.head.appendChild(style);

    // Pobieramy oba elementy do JS
    const flipContainer = cat.querySelector('.kot-flip');
    const sprite = cat.querySelector('.kot-sprite');
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let catX = window.innerWidth / 2;
    let catY = window.innerHeight / 2;
    
    let isMoving = false;
    let moveTimeout;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX + 40; 
        mouseY = e.clientY + 40; 

        if (!isMoving) {
            isMoving = true;
            sprite.classList.add('biegnie');
        }

        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => {
            isMoving = false;
            sprite.classList.remove('biegnie');
        }, 100);
    });

    function animujKota() {
        let dx = mouseX - catX;
        let dy = mouseY - catY;

        catX += dx * 0.008;
        catY += dy * 0.008;

        cat.style.left = `${catX}px`;
        cat.style.top = `${catY}px`;

        // OBRACAMY KONTENER .kot-flip, A NIE .kot-sprite
        if (dx > 2) {
            flipContainer.style.transform = 'scaleX(-1)';
        } else if (dx < -2) {
            flipContainer.style.transform = 'scaleX(1)';
        }

        requestAnimationFrame(animujKota);
    }
    
    animujKota();
});