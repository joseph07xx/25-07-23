// INDEX
function crearParticulas() {
            const contenedor = document.getElementById('particulas');
            const cant = 35;
            for (let i = 0; i < cant; i++) {
                const p = document.createElement('div');
                p.classList.add('particula');
                const size = Math.random() * 60 + 20;
                p.style.width = size + 'px';
                p.style.height = size + 'px';
                p.style.left = Math.random() * 100 + '%';
                p.style.animationDuration = (Math.random() * 25 + 20) + 's';
                p.style.animationDelay = (Math.random() * 20) + 's';
                p.style.opacity = Math.random() * 0.2 + 0.05;
                contenedor.appendChild(p);
            };
