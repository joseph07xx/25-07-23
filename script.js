document.addEventListener("DOMContentLoaded", () => {

    const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================================
    // 1. PARTÍCULAS DE FONDO (neón)
    // ============================================================
    (function crearParticulasFondo() {
        const contenedor = document.getElementById('contenedorParticulas');
        if (!contenedor || prefiereMenosMovimiento) return;

        // Menos partículas en pantallas chicas: menos trabajo para el navegador del celular
        const cant = window.innerWidth < 600 ? 22 : 50;
        const colores = ['#ff2d75', '#00e5ff', '#b026ff', '#ff9e00'];
        const frag = document.createDocumentFragment();

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
            frag.appendChild(p);
        }
        contenedor.appendChild(frag);

        // Pausa las animaciones cuando la pestaña no está visible (ahorra batería)
        document.addEventListener('visibilitychange', () => {
            contenedor.querySelectorAll('.particula-neon').forEach(el => {
                el.style.animationPlayState = document.hidden ? 'paused' : 'running';
            });
        });
    })();

    // ============================================================
    // 2. PARTÍCULA INTERACTIVA (sigue al mouse)
    // ============================================================
    (function particulaInteractiva() {
        const particula = document.getElementById('particulaInteractiva');
        if (!particula || prefiereMenosMovimiento) return;
        // Solo tiene sentido con mouse; en táctil no aporta nada
        if (window.matchMedia('(hover: none)').matches) return;

        let mouseX = -200, mouseY = -200;
        let currentX = -200, currentY = -200;

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

    // ============================================================
    // 3 y 4. CONTADORES (tiempo juntos + cuenta regresiva)
    //    Unificados en una sola función reutilizable para evitar
    //    código duplicado y facilitar el mantenimiento.
    // ============================================================
    const fechaInicio = new Date(2023, 6, 25, 0, 0, 0);
    const fechaFinal = new Date(2026, 9, 31, 0, 0, 0); // 09 = octubre

    function calcularDiferencia(desde, hasta) {
        let anos = hasta.getFullYear() - desde.getFullYear();
        let meses = hasta.getMonth() - desde.getMonth();
        let dias = hasta.getDate() - desde.getDate();
        let horas = hasta.getHours() - desde.getHours();
        let minutos = hasta.getMinutes() - desde.getMinutes();
        let segundos = hasta.getSeconds() - desde.getSeconds();

        if (segundos < 0) { segundos += 60; minutos--; }
        if (minutos < 0) { minutos += 60; horas--; }
        if (horas < 0) { horas += 24; dias--; }
        if (dias < 0) {
            const ultimoDia = new Date(hasta.getFullYear(), hasta.getMonth(), 0).getDate();
            dias += ultimoDia;
            meses--;
        }
        if (meses < 0) { meses += 12; anos--; }

        return {
            anos: Math.max(anos, 0),
            meses: Math.max(meses, 0),
            dias: Math.max(dias, 0),
            horas: Math.max(horas, 0),
            minutos: Math.max(minutos, 0),
            segundos: Math.max(segundos, 0)
        };
    }

    function crearActualizadorContador({ sufijo, obtenerDiferencia, obtenerTotalSegundos, obtenerPorcentajes }) {
        const valoresAnteriores = {};
        const claves = ['anos', 'meses', 'dias', 'horas', 'minutos', 'segundos'];

        return function actualizar() {
            const valores = obtenerDiferencia();

            for (const key of claves) {
                const el = document.getElementById(sufijo ? `${key}-${sufijo}` : key);
                if (!el) continue;
                const nuevoValor = valores[key];
                if (valoresAnteriores[key] !== nuevoValor) {
                    el.textContent = nuevoValor;
                    el.classList.remove('numero-saltar');
                    void el.offsetWidth;
                    el.classList.add('numero-saltar');
                    valoresAnteriores[key] = nuevoValor;
                }
            }

            const totalEl = document.getElementById(sufijo ? `totalSegundos-${sufijo}` : 'totalSegundos');
            if (totalEl) totalEl.textContent = obtenerTotalSegundos().toLocaleString('es-ES');

            const porcentajes = obtenerPorcentajes(valores);
            for (const key of claves) {
                const barraId = sufijo
                    ? `barra${key.charAt(0).toUpperCase()}${key.slice(1)}-${sufijo}`
                    : `barra${key.charAt(0).toUpperCase()}${key.slice(1)}`;
                const barra = document.getElementById(barraId);
                if (barra) barra.style.width = Math.min(Math.max(porcentajes[key], 0), 100) + '%';
            }
        };
    }

    const actualizarTiempoJuntos = crearActualizadorContador({
        sufijo: '',
        obtenerDiferencia: () => calcularDiferencia(fechaInicio, new Date()),
        obtenerTotalSegundos: () => Math.floor((new Date() - fechaInicio) / 1000),
        obtenerPorcentajes: (v) => ({
            anos: (v.anos / 100) * 100,
            meses: (v.meses / 12) * 100,
            dias: (v.dias / 31) * 100,
            horas: (v.horas / 24) * 100,
            minutos: (v.minutos / 60) * 100,
            segundos: (v.segundos / 60) * 100
        })
    });

    const actualizarCuentaRegresiva = crearActualizadorContador({
        sufijo: 'restan',
        obtenerDiferencia: () => {
            const ahora = new Date();
            if (fechaFinal - ahora < 0) return { anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0 };
            return calcularDiferencia(ahora, fechaFinal);
        },
        obtenerTotalSegundos: () => Math.max(Math.floor((fechaFinal - new Date()) / 1000), 0),
        obtenerPorcentajes: () => {
            const totalDiff = fechaFinal - fechaInicio;
            const restante = fechaFinal - new Date();
            const porcentaje = totalDiff > 0 ? (1 - restante / totalDiff) * 100 : 0;
            return { anos: porcentaje, meses: porcentaje, dias: porcentaje, horas: porcentaje, minutos: porcentaje, segundos: porcentaje };
        }
    });

    actualizarTiempoJuntos();
    actualizarCuentaRegresiva();
    setInterval(() => {
        actualizarTiempoJuntos();
        actualizarCuentaRegresiva();
    }, 1000);

    // ============================================================
    // 5. MODAL DE MENSAJE SECRETO
    // ============================================================
    (function modalMensaje() {
        const btnAbrir = document.getElementById('btnMensajeSecreto');
        const modal = document.getElementById('modalMensaje');
        const cerrar = document.getElementById('cerrarModal');
        const btnCompartir = document.getElementById('btnCompartirMensaje');
        const texto = document.getElementById('mensajeModal');
        if (!btnAbrir || !modal || !cerrar || !texto) return;

        let elementoConFocoPrevio = null;

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

        function abrirModal() {
            elementoConFocoPrevio = document.activeElement;
            texto.textContent = generarMensaje();
            modal.classList.add('activo');
            document.body.style.overflow = 'hidden';
            cerrar.focus();
        }

        function cerrarModal() {
            modal.classList.remove('activo');
            document.body.style.overflow = '';
            if (elementoConFocoPrevio) elementoConFocoPrevio.focus();
        }

        btnAbrir.addEventListener('click', abrirModal);
        btnAbrir.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                abrirModal();
            }
        });
        btnAbrir.setAttribute('tabindex', '0');
        btnAbrir.setAttribute('role', 'button');

        cerrar.addEventListener('click', cerrarModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('activo')) cerrarModal();
            // Atrapa el foco (Tab) dentro del modal mientras está abierto
            if (e.key === 'Tab' && modal.classList.contains('activo')) {
                const focoElems = modal.querySelectorAll('button');
                const primero = focoElems[0];
                const ultimo = focoElems[focoElems.length - 1];
                if (e.shiftKey && document.activeElement === primero) {
                    e.preventDefault();
                    ultimo.focus();
                } else if (!e.shiftKey && document.activeElement === ultimo) {
                    e.preventDefault();
                    primero.focus();
                }
            }
        });

        if (btnCompartir) {
            btnCompartir.addEventListener('click', async () => {
                const mensajeActual = texto.textContent;
                if (navigator.share) {
                    try {
                        await navigator.share({ text: mensajeActual, title: 'Para ti 💌' });
                    } catch (err) {
                        // El usuario canceló el compartir; no hacemos nada
                    }
                } else if (navigator.clipboard) {
                    try {
                        await navigator.clipboard.writeText(mensajeActual);
                        const textoOriginal = btnCompartir.textContent;
                        btnCompartir.textContent = '¡Copiado! 💜';
                        setTimeout(() => { btnCompartir.textContent = textoOriginal; }, 1800);
                    } catch (err) {
                        // Silencioso: si falla, el usuario igual puede seleccionar y copiar el texto
                    }
                }
            });
        }
    })();

    // ============================================================
    // 6. BOTÓN SORPRESA (confeti)
    // ============================================================
    (function botonSorpresa() {
        const btn = document.getElementById('botonSorpresa');
        if (!btn) return;

        function lanzarConfeti() {
            if (prefiereMenosMovimiento) return;
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

    // ============================================================
    // 7. EFECTO GLITCH EN EL TÍTULO
    // ============================================================
    (function glitchMejorado() {
        const titulo = document.querySelector('.titulo-principal');
        if (!titulo || prefiereMenosMovimiento) return;
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

    // ============================================================
    // 8. MÚSICA DE FONDO (opcional — agreguen su canción como musica.mp3)
    // ============================================================
    (function musicaFondo() {
        const btn = document.getElementById('botonMusica');
        const audio = document.getElementById('musicaFondo');
        if (!btn || !audio) return;

        let sonando = false;

        btn.addEventListener('click', async () => {
            if (!sonando) {
                try {
                    await audio.play();
                    sonando = true;
                    btn.textContent = '🔊';
                    btn.setAttribute('aria-pressed', 'true');
                    btn.setAttribute('aria-label', 'Pausar música de fondo');
                } catch (err) {
                    // No hay archivo de audio o el navegador bloqueó la reproducción
                    btn.textContent = '⚠️';
                    setTimeout(() => { btn.textContent = '🔇'; }, 1500);
                }
            } else {
                audio.pause();
                sonando = false;
                btn.textContent = '🔇';
                btn.setAttribute('aria-pressed', 'false');
                btn.setAttribute('aria-label', 'Reproducir música de fondo');
            }
        });
    })();

    // ============================================================
    // 9. BOTÓN VOLVER ARRIBA
    // ============================================================
    (function volverArriba() {
        const btn = document.getElementById('botonArriba');
        if (!btn) return;

        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 500);
        }, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: prefiereMenosMovimiento ? 'auto' : 'smooth' });
        });
    })();

    // ============================================================
    // 10. CONTADOR DE VISITAS (local, solo en este dispositivo)
    // ============================================================
    (function contadorVisitas() {
        const el = document.getElementById('contadorVisitas');
        if (!el || !window.localStorage) return;

        try {
            const visitas = (parseInt(localStorage.getItem('eternidad_visitas'), 10) || 0) + 1;
            localStorage.setItem('eternidad_visitas', visitas);
            el.textContent = `✧ visita nº ${visitas.toLocaleString('es-ES')} desde este dispositivo ✧`;
        } catch (err) {
            // Almacenamiento no disponible (modo privado, etc.) — se omite en silencio
        }
    })();
});
