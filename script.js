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
            }
        };
        const fechaObjetivo = new Date(2026, 6, 20, 18, 0, 0); // mes 6 = julio

        function actualizarContador() {
            const ahora = new Date();
            const diffMs = fechaObjetivo - ahora;

            if (diffMs <= 0) {
                // Si ya pasó la fecha, mostrar 0
                document.getElementById('diasRestantes').textContent = '0';
                document.getElementById('horasRestantes').textContent = '0';
                document.getElementById('minutosRestantes').textContent = '0';
                document.getElementById('segundosRestantes').textContent = '0';
                return;
            }

            const totalSeg = Math.floor(diffMs / 1000);
            const dias = Math.floor(totalSeg / 86400);
            const horas = Math.floor((totalSeg % 86400) / 3600);
            const minutos = Math.floor((totalSeg % 3600) / 60);
            const segundos = totalSeg % 60;

            document.getElementById('diasRestantes').textContent = dias;
            document.getElementById('horasRestantes').textContent = horas;
            document.getElementById('minutosRestantes').textContent = minutos;
            document.getElementById('segundosRestantes').textContent = segundos;
        }

        actualizarContador();
        setInterval(actualizarContador, 1000);
crearParticulas();


