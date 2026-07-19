
document.addEventListener("DOMContentLoaded", () => {
                        
            //INDEX PROVISIONAL
            /*function crearParticulas() {
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
        };


            
            crearParticulas();
            actualizarContador();
            setInterval(actualizarContador, 1000);//*/

            
(function crearParticulasFondo() {
    const contenedor = document.getElementById('contenedorParticulas');
    const cant = 50;
    const colores = ['#ff2d75', '#00e5ff', '#b026ff', '#ff9e00'];
    for (let i = 0; i < cant; i++) {
        const p = document.createElement('div');
        p.classList.add('particula-neon');
        const size = Math.random() * 50 + 10;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.background = `radial-gradient(circle, ${colores[Math.floor(Math.random() * colores.length)]} 0%, transparent 70%)`;
        p.style.animationDuration = (Math.random() * 30 + 25) + 's';
        p.style.animationDelay = (Math.random() * 25) + 's';
        p.style.opacity = Math.random() * 0.25 + 0.05;
        contenedor.appendChild(p);
    }
})();

(function particulaInteractiva() {
    const particula = document.getElementById('particulaInteractiva');
    let mouseX = -200,
        mouseY = -200;
    let currentX = -200,
        currentY = -200;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        particula.style.opacity = '0.6';
    });

    document.addEventListener('mouseleave', () => {
        particula.style.opacity = '0';
    });

    function animateParticula() {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        particula.style.transform = `translate(${currentX - 60}px, ${currentY - 60}px)`;
        requestAnimationFrame(animateParticula);
    }
    animateParticula();
})();

const fechaInicio = new Date(2023, 6, 25, 0, 0, 0);
const fechaFinal = new Date(2026, 09, 31, 0, 0, 0);


let valoresAnteriores = {};          // para el contador principal
let valoresAnterioresRegresivo = {}; // para el contador regresivo


function actualizarContador() {
    const ahora = new Date();
    const diffMs = ahora - fechaInicio;
    const totalSeg = Math.floor(diffMs / 1000);

    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        const ultimoDia = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias += ultimoDia;
        meses--;
    }
    if (meses < 0) { meses += 12; anos--; }

    const elementos = {
        anos: document.getElementById('anos'),
        meses: document.getElementById('meses'),
        dias: document.getElementById('dias'),
        horas: document.getElementById('horas'),
        minutos: document.getElementById('minutos'),
        segundos: document.getElementById('segundos')
    };

    const valores = { anos, meses, dias, horas, minutos, segundos };


    for (const [key, el] of Object.entries(elementos)) {
        const nuevoValor = valores[key];
        if (valoresAnteriores[key] !== nuevoValor) {
            el.textContent = nuevoValor;
            el.classList.remove('numero-saltar');
            void el.offsetWidth;
            el.classList.add('numero-saltar');
            valoresAnteriores[key] = nuevoValor;
        }
    }

    document.getElementById('totalSegundos').textContent = totalSeg.toLocaleString('es-ES');


    const maxAnos = 100, maxMeses = 12, maxDias = 31, maxHoras = 24, maxMinutos = 60, maxSegundos = 60;
    document.getElementById('barraAnos').style.width = Math.min((anos / maxAnos) * 100, 100) + '%';
    document.getElementById('barraMeses').style.width = Math.min((meses / maxMeses) * 100, 100) + '%';
    document.getElementById('barraDias').style.width = Math.min((dias / maxDias) * 100, 100) + '%';
    document.getElementById('barraHoras').style.width = Math.min((horas / maxHoras) * 100, 100) + '%';
    document.getElementById('barraMinutos').style.width = Math.min((minutos / maxMinutos) * 100, 100) + '%';
    document.getElementById('barraSegundos').style.width = Math.min((segundos / maxSegundos) * 100, 100) + '%';
}


function contadornuevo() {
    const ahora = new Date();
    const diffMs = fechaFinal - ahora;
    const totalSeg = Math.floor(diffMs / 1000);

    if (diffMs < 0) {
        ['anos-restan', 'meses-restan', 'dias-restan', 'horas-restan', 'minutos-restan', 'segundos-restan']
            .forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = '0';
            });
        document.getElementById('totalSegundos-restan').textContent = '0';
        ['barraAnos-restan', 'barraMeses-restan', 'barraDias-restan', 'barraHoras-restan', 'barraMinutos-restan', 'barraSegundos-restan']
            .forEach(id => {
                const barra = document.getElementById(id);
                if (barra) barra.style.width = '0%';
            });
        return;
    }

    let anos = fechaFinal.getFullYear() - ahora.getFullYear();
    let meses = fechaFinal.getMonth() - ahora.getMonth();
    let dias = fechaFinal.getDate() - ahora.getDate();
    let horas = fechaFinal.getHours() - ahora.getHours();
    let minutos = fechaFinal.getMinutes() - ahora.getMinutes();
    let segundos = fechaFinal.getSeconds() - ahora.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        const ultimoDia = new Date(fechaFinal.getFullYear(), fechaFinal.getMonth(), 0).getDate();
        dias += ultimoDia;
        meses--;
    }
    if (meses < 0) { meses += 12; anos--; }

    if (anos < 0) anos = 0;
    if (meses < 0) meses = 0;
    if (dias < 0) dias = 0;
    if (horas < 0) horas = 0;
    if (minutos < 0) minutos = 0;
    if (segundos < 0) segundos = 0;

    const elementos = {
        anos: document.getElementById('anos-restan'),
        meses: document.getElementById('meses-restan'),
        dias: document.getElementById('dias-restan'),
        horas: document.getElementById('horas-restan'),
        minutos: document.getElementById('minutos-restan'),
        segundos: document.getElementById('segundos-restan')
    };

    const valores = { anos, meses, dias, horas, minutos, segundos };

    for (const [key, el] of Object.entries(elementos)) {
        if (!el) continue;
        const nuevoValor = valores[key];
        if (valoresAnterioresRegresivo[key] !== nuevoValor) {
            el.textContent = nuevoValor;
            el.classList.remove('numero-saltar');
            void el.offsetWidth;
            el.classList.add('numero-saltar');
            valoresAnterioresRegresivo[key] = nuevoValor;
        }
    }

    const totalEl = document.getElementById('totalSegundos-restan');
    if (totalEl) totalEl.textContent = totalSeg.toLocaleString('es-ES');


    const totalDiff = fechaFinal - fechaInicio;
    const porcentajeRestante = totalDiff > 0 ? (diffMs / totalDiff) * 100 : 0;
    const barras = {
        anos: document.getElementById('barraAnos-restan'),
        meses: document.getElementById('barraMeses-restan'),
        dias: document.getElementById('barraDias-restan'),
        horas: document.getElementById('barraHoras-restan'),
        minutos: document.getElementById('barraMinutos-restan'),
        segundos: document.getElementById('barraSegundos-restan')
    };
    for (const barra of Object.values(barras)) {
        if (barra) {
            barra.style.width = Math.min(Math.max(porcentajeRestante, 0), 100) + '%';
        }
    }
}


actualizarContador();
setInterval(actualizarContador, 1000);

contadornuevo();
setInterval(contadornuevo, 1000);

(function modalMensaje() {
    const btnAbrir = document.getElementById('btnMensajeSecreto');
    const modal = document.getElementById('modalMensaje');
    const cerrar = document.getElementById('cerrarModal');
    const texto = document.getElementById('mensajeModal');

    const mensajes = [
        "Cada día a tu lado es un regalo del universo. Eres mi luz, mi paz y mi locura favorita. 💫",
        "No necesito un mapa para encontrar mi camino, porque tú eres mi brújula. Te amo. 🌟",
        "El tiempo se detiene cuando me miras, y el mundo entero desaparece. Eres mi eternidad. ⏳",
        "En tus ojos encontré el hogar que siempre busqué. Gracias por existir. 🏡",
        "Eres la melodía que mi corazón siempre quiso cantar. 🎶",
        "La vida es mejor a tu lado, incluso en los días grises. Eres mi arcoíris. 🌈",
        "Te elegiría una y otra vez, en cada vida, en cada universo. 💖",
        "Cantar de los Cantares 8:6: Ponme como un sello sobre tu corazón, como una marca sobre tu brazo; porque fuerte es como la muerte el amor; celos, duros como el sepulcro.",
        "Cantar de los Cantares 2:16: Mi amado es mío, y yo suya; él apacienta entre los lirios.",
        "Cantar de los Cantares 4:9: Has cautivado mi corazón, hermana mía, esposa mía; has cautivado mi corazón con uno de tus ojos.",
        "Cantar de los Cantares 1:2: ¡Oh, si él me besara con besos de su boca! Porque mejores son tus amores que el vino.",
        "Proverbios 5:18-19: Bendita sea tu fuente, y alégrate con la mujer de tu juventud, como cierva amada y graciosa gacela. Sus caricias te satisfagan en todo tiempo, y en su amor recréate siempre.",
        "Eclesiastés 9:9: Goza de la vida con la mujer que amas, todos los días de la vida de tu vanidad que te son dados debajo del sol.",
        "Génesis 29:20: Así sirvió Jacob siete años por Raquel; y le parecieron como pocos días, porque la amaba.",
        "Cantar de los Cantares 7:6: ¡Qué hermosa eres, y cuán suave, oh amor deleitoso!",
        "Cantar de los Cantares 2:4: Me llevó a la casa del banquete, y su bandera sobre mí fue amor.",
        "Cantar de los Cantares 8:7: Las muchas aguas no podrán apagar el amor, ni lo ahogarán los ríos.",
        "Génesis 2:24: Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne.",
        "Eclesiastés 4:9: Mejores son dos que uno; porque tienen mejor paga de su trabajo.",
        "Eclesiastés 4:12: Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto.",
        "Efesios 5:25: Maridos, amad a vuestras mujeres, así como Cristo amó a la iglesia, y se entregó a sí mismo por ella.",
        "Efesios 5:33: Por lo demás, cada uno de vosotros ame también a su mujer como a sí mismo; y la mujer respete a su marido.",
        "1 Pedro 3:7: Vosotros, maridos, igualmente, vivid con ellas sabiamente, dando honor a la mujer...",
        "Mateo 19:6: Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.",
        "1 Corintios 7:3: El marido cumpla con la mujer el deber conyugal, y asimismo la mujer con el marido.",
        "Proverbios 18:22: El que halla esposa halla el bien, y alcanza la benevolencia del Señor.",
        "1 Corintios 7:14: Porque el marido incrédulo es santificado en la mujer, y la mujer incrédula en el marido.",
        "Cantar de los Cantares 6:3: Yo soy de mi amado, y mi amado es mío.",
        "Rut 1:16: No me ruegues que te deje... porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré.",
        "Proverbios 31:10: Mujer virtuosa, ¿quién la hallará? Porque su estima sobrepasa largamente a la de las piedras preciosas.",
        "1 Samuel 18:1: Y aconteció que... el alma de Jonatán quedó ligada con la de David, y lo amó Jonatán como a sí mismo. (Refleja la lealtad profunda y apasionada entre amigos).",
        "Cantar de los Cantares 1:15: He aquí que tú eres hermosa, amiga mía; he aquí que eres bella; tus ojos son como de paloma.",
        "Cantar de los Cantares 5:10: Mi amado es blanco y rubio, señalado entre diez mil.",
        "Cantar de los Cantares 2:3: Como el manzano entre los árboles silvestres, así es mi amado entre los jóvenes; bajo la sombra del deseado me senté, y su fruto fue dulce a mi paladar.",
        "Cantar de los Cantares 6:9: Una es mi paloma, mi perfecta.",
        "Cantar de los Cantares 4:10: ¡Cuán hermosos son tus amores, hermana mía, esposa mía! ¡Cuánto mejores que el vino tus amores!",
        "Cantar de los Cantares 3:4: Hallé luego al que ama mi alma; lo agarré, y no lo solté."
    ];

    function generarMensaje() {
        return mensajes[Math.floor(Math.random() * mensajes.length)];
    }

    btnAbrir.addEventListener('click', () => {
        texto.textContent = generarMensaje();
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden';
    });

    cerrar.addEventListener('click', () => {
        modal.classList.remove('activo');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('activo');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('activo')) {
            modal.classList.remove('activo');
            document.body.style.overflow = '';
        }
    });
})();

// ============================================================
// 5. BOTÓN SORPRESA (sin cambios)
// ============================================================
(function botonSorpresa() {
    const btn = document.getElementById('botonSorpresa');

    function lanzarConfeti() {
        const colores = ['#ff2d75', '#00e5ff', '#b026ff', '#ff9e00', '#ffdd00', '#ff6b6b'];
        const emojis = ['❤️', '✨', '🌟', '💖', '🌈', '🎉', '💫', '🥰', '💞', '🌸', '🌺', '🎊', '💝', '💗'];

        for (let i = 0; i < 80; i++) {
            const confeti = document.createElement('div');
            confeti.style.position = 'fixed';
            confeti.style.left = Math.random() * 100 + 'vw';
            confeti.style.top = '-20px';
            confeti.style.width = Math.random() * 12 + 6 + 'px';
            confeti.style.height = Math.random() * 12 + 6 + 'px';
            confeti.style.background = colores[Math.floor(Math.random() * colores.length)];
            confeti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            confeti.style.zIndex = '1000';
            confeti.style.pointerEvents = 'none';
            confeti.style.opacity = '0.9';
            confeti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confeti.style.boxShadow = '0 0 10px rgba(255,255,255,0.2)';

            if (Math.random() < 0.25) {
                confeti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                confeti.style.fontSize = Math.random() * 20 + 14 + 'px';
                confeti.style.background = 'transparent';
                confeti.style.width = 'auto';
                confeti.style.height = 'auto';
                confeti.style.boxShadow = 'none';
            }

            document.body.appendChild(confeti);

            const duracion = Math.random() * 2 + 2;
            const xOffset = (Math.random() - 0.5) * 300;
            const yOffset = Math.random() * 200 + 100;

            confeti.animate([
                { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate(${xOffset}px, ${window.innerHeight + yOffset}px) rotate(${Math.random() * 720}deg)`, opacity: 0.2 }
            ], {
                duration: duracion * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fill: 'forwards'
            }).onfinish = () => confeti.remove();
        }
    }

    btn.addEventListener('click', () => {
        lanzarConfeti();
        setTimeout(lanzarConfeti, 400);
        setTimeout(lanzarConfeti, 900);
    });
})();

(function glitchMejorado() {
    const titulo = document.querySelector('.titulo-principal');
    let intervalo;

    titulo.addEventListener('mouseenter', () => {
        intervalo = setInterval(() => {
            if (Math.random() < 0.2) {
                titulo.style.transform = `translate(${Math.random() * 6 - 3}px, ${Math.random() * 6 - 3}px) skew(${Math.random() * 2 - 1}deg)`;
                titulo.style.textShadow = `0 0 20px rgba(255,45,117,0.8), 0 0 60px rgba(0,229,255,0.8)`;
                setTimeout(() => {
                    titulo.style.transform = '';
                    titulo.style.textShadow = '';
                }, 120);
            }
        }, 100);
    });

    titulo.addEventListener('mouseleave', () => {
        clearInterval(intervalo);
        titulo.style.transform = '';
        titulo.style.textShadow = '';
    });
})();
    





            
});

