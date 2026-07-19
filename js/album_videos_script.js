(function() {
            'use strict';

            // ============================================================
            // 1. PARTÍCULAS CON CANVAS (mejor rendimiento)
            // ============================================================
            function iniciarParticulas() {
                const canvas = document.getElementById('particulas-canvas');
                const ctx = canvas.getContext('2d');
                let ancho, alto;
                const particulas = [];
                const NUM_PARTICULAS = 40; // reducidas para mejor rendimiento

                function redimensionar() {
                    ancho = canvas.width = window.innerWidth;
                    alto = canvas.height = window.innerHeight;
                }
                window.addEventListener('resize', redimensionar);
                redimensionar();

                class Particula {
                    constructor() {
                        this.reset();
                    }
                    reset() {
                        this.x = Math.random() * ancho;
                        this.y = Math.random() * alto - alto; // comienzan fuera arriba
                        this.size = Math.random() * 40 + 10;
                        this.velocidad = Math.random() * 0.5 + 0.2;
                        this.opacidad = Math.random() * 0.15 + 0.03;
                        this.rotacion = Math.random() * 360;
                        this.velRot = (Math.random() - 0.5) * 0.02;
                    }
                    update() {
                        this.y += this.velocidad;
                        this.rotacion += this.velRot;
                        if (this.y > alto + this.size) {
                            this.reset();
                            this.y = -this.size;
                        }
                    }
                    draw() {
                        ctx.save();
                        ctx.globalAlpha = this.opacidad;
                        ctx.translate(this.x, this.y);
                        ctx.rotate(this.rotacion);
                        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
                        grad.addColorStop(0, 'rgba(180, 140, 220, 0.4)');
                        grad.addColorStop(1, 'rgba(180, 140, 220, 0)');
                        ctx.fillStyle = grad;
                        ctx.beginPath();
                        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                }

                for (let i = 0; i < NUM_PARTICULAS; i++) {
                    const p = new Particula();
                    p.y = Math.random() * alto; // distribuir inicialmente
                    particulas.push(p);
                }

                function animar() {
                    ctx.clearRect(0, 0, ancho, alto);
                    particulas.forEach(p => {
                        p.update();
                        p.draw();
                    });
                    requestAnimationFrame(animar);
                }
                animar();
            }
            iniciarParticulas();

            

            // ============================================================
            // 3. GALERÍA DE VIDEOS CON INTERSECTION OBSERVER (carga lazy)
            // ============================================================
            
            const misRecuerdos = [
                

{ id: "14dnKN6GxU3YPncHrcYPPyWQwXoiD4dhg" },
{ id: "11y_5qOlzw5LVl_UTw6QAojRewClOaR5e" },
{ id: "18VcK1PlYUQGAqDDZH50xg_YpyMOqgxN7" },
{ id: "1KFr9jMZQSNK8TN1JiWDznOpaG0tMKC2K" },
{ id: "1sQxwAPmVEwG4b0AzhCxev79_oZU5EWuH" },
{ id: "1jFpQ6sORh3U89Y0_yZX9rcCGcZNsGZVI" },
{ id: "1JvH5ryOI6qJpHyBieTC7X3faPmeLm4OB" },
{ id: "17mEQeGdvDJNH4pXZqLg4LhaHzuYo3AJn" },
{ id: "173pt-AokFtHpmRyEm3kHp31Gu-_ut-JV" },
{ id: "15kVigmSZsiPrencSzJoMqdqPEwawxoh2" },
{ id: "1364QGmaTlUQag95EetKRrFvnVe0IX_jm" },
{ id: "10IkPS95QmZ3Ekn1AjT9IdyqHzER0u9sV" },
{ id: "1A8NxNDck3jnxERfle9cyrDbPpxFJM_84" },
{ id: "10zGeDSAdLZ5NXQbUORNvmtDVnwcR35bu" },
{ id: "1BvX--ZiqMQjn4Zg_DXX84muS_TfIwhV6" },
{ id: "1AR75WynTpuVG0BdJMMJB23kiEmdEsdAQ" },
{ id: "19eE9A8984Dd0X98sK8lyyG9wzrt8dn7Q" },
{ id: "19MAhQ2wD-E-EdXNGwZWwsb1-fMNCy6qU" },
{ id: "1C83yoJdw6OcT6b_TjY84vzRPOjtSYOe-" },
{ id: "18AM1bgThOZtnW334o0p2bjYNsjIqdkQz" },
{ id: "118Xlm0hO4_WLN6KPzXOPJ99neWJB0f2U" },
{ id: "1GzuUBJ6PlEAkXGsEPYJZubSZqAZLIqId" },
{ id: "115zG8EXfEloQkXl_w5i0v-FcOv4geyY8" },
{ id: "1EwM-kcTXC2A82N5ax6SjLsh7utOLdFur" },
{ id: "1EKMGYcKouevHzj1WSAdzexMUmZVymty8" },
{ id: "1EJ00wDAqYP0yz1dSV9bD2DMCC6ioTSm_" },
{ id: "1DqfGHXp50uNWP4dB92R6yzS1_7N8vWZO" },
{ id: "1Cvfz_o0sO-BcdlnCGkHOtTp6Zh6ojGQP" },
{ id: "1KiGWqI8LKAjVC8akj9ZkT47BSFRfSzN5" },
{ id: "1JlBN-dHljyvHzZj-a06HPZIHqPBymnEt" },
{ id: "1HdrOnKavOyRiuhUTcJWJYaPaABd0pbAV" },
{ id: "1HAFmiSj9FntAmRVmUbWuhhHtcQh2THHc" },
{ id: "1GP1BV9Pj8G81lyDUyb8Uz6eNp1pSMl6E" },
{ id: "1Qi3Bo5wlz_BMm4fSdxjH-zZsFfheC3y0" },
{ id: "1QDJQVdt3AH_o7FCcu2LQS9Mo0KAVXzjT" },
{ id: "1Q6tbdCZF01fyDz2lEOV6ZCA3da948j4a" },
{ id: "1PAPKJILlKb5TxQyEsjAp8XafSfMoCBx8" },
{ id: "1P2GZ0gfkSHomUHkAvv-bntdUAe-dQXQ-" },
{ id: "1UAgW1LdPI0pIX2Rz_PJJg4XBqT4iA3GQ" },
{ id: "1T_JbqQjnRcOCNPeaDE58Xv19DJ_uO6-G" },
{ id: "1TUKfS5uRwKulQQVNLP5-98CGEoN35LaU" },
{ id: "1RRKZE5fpgYjflY0u-SX03lDzufXwDg8d" },
{ id: "1RQ_wFGR8aqWW3jGLdTThtj17bKk-gP3w" },
{ id: "1YKkx7Pt1NdX8LkxkeISnbDk5ebqyvJ4G" },
{ id: "1YFOsYd9BA5gBxNTV_ijAtcgaaP5tRDDl" },
{ id: "1XRABLy1VamtZchZncVZGs2TBNFfUPctT" },
{ id: "1W7OJnOVEYjKUIDg8ZlkxpYCW8drAU-a2" },
{ id: "1VTvxXAfRCFqdONA9MNqksTxjtqGx92xu" },
{ id: "1c5n4Uwcb74CBvDbv9ZaScuLQyhfAKNXz" },
{ id: "1bZ4DicfJ57QN1oR0zO1VhBc-eukx46vV" },
{ id: "1b8vYJ669M0GaArbzEfp3bXir0vyhEOMA" },
{ id: "1Z7fAOZ4N45XVEF7PRGNT_kkW_ZeDCrMt" },
{ id: "1YzfwnswjdSgznWECc9X8oKd6AfvvfHER" },
{ id: "1hVifW00eRwhprtXz98h7uIXZdvt6iLun" },
{ id: "1gxED3WqAeqQMz47Ho2pHnt0j0OYPPHkx" },
{ id: "1fpgCD59aM-gDXDPxmPFkAKy8W5k2eA37" },
{ id: "1fnR3T-tP_BYr9_fWLrUiLXFCh_4NYxM-" },
{ id: "1cxkaLuKMRTjpI34x3OGffgME6NSaKBc5" },
{ id: "1mXHTJ0OcWkkZhu7YjSFyXbLxFnpGbMXm" },
{ id: "1mMXrJBWD-2Dt1Mm51Q4LNmpF8X-DbGOM" },
{ id: "1lB5ecmYa-Hn1JnaCF6-Hibk79T3HMasd" },
{ id: "1jbUL2zFmTv7HmmyNHser0H9wutMJBv5F" },
{ id: "1jK7djk1htqykouAmTQFrtSr0LlYCkxwf" },
{ id: "1xRnz5K_lvQYTwhh8_U1qmAPB__9ABnKi" },
{ id: "1vXhBrzqy3ektabYEZZQgRloolSYTM5sf" },
{ id: "1uSE4oxn_Ipm36aqodAys-5IfFj4AuW9W" },
{ id: "1tsUMr1CAWtWhWFZ7RQiIYn6zP1AysKgh" },
{ id: "1rRYXeBLgmBTLcyiaLUt2oQR4Yq6ON8eU" },
{ id: "1zKsKovhUY5V0uhMOcPRZD5Gm4g90YFku" },
{ id: "1nX7a_o1wVh_vHWefhLbVUPbJ5um_YR6q" },
{ id: "1in4blVKR8QBEKvBJrHmdfUt5G8iaWqqd" },
{ id: "1cER3utVB9gjK9AT9e-SaMbQzP1xfNkZ-" },
{ id: "1YNxmpU3saI9u4RI4tEtlLEov_n4jeMLf" },
{ id: "1UFT73EKkFAidedMYqwEN93RoO9h7lTA-" },
{ id: "1R6oaqcyh_YpoVOCGD4yYdYM3FRfMPx2r" },
{ id: "1LQq80IstF1DYwAnMknq_m0vLxEiJqYLz" },
{ id: "1GCBxmuqVjy3i2FFvFdSe-SccMxwjfUvp" },
{ id: "1CV9XdDNON1Mh49GJJsWlt4Ud3yxcC1GC" },
{ id: "18UENBgerurpvADYlytMx3IcMknzPqdbt" },
{ id: "11tjOsSAaMWrOW5SPa5O8K8m5_yM57LHB" },
{ id: "1JZCIyEJfRwWYaJmPMPPmKo3exvqzAlIK" },
{ id: "11B9tNKeTWpB-ZVJf1t_vFKtshcKzbgkk" }
            ];

            const contenedor = document.getElementById('galeriaGrid');
            const fragment = document.createDocumentFragment();

            // Crear tarjetas
            misRecuerdos.forEach((recuerdo, index) => {
                const num = index + 1;
                const videoId = recuerdo.id;
                const titulo = recuerdo.titulo || 'Momento especial';
                const fecha = recuerdo.fecha || '✨';
                const videoSrc = `https://drive.google.com/file/d/${videoId}/preview`;

                const card = document.createElement('div');
                card.className = 'card';
                card.dataset.video = videoSrc;
                card.dataset.titulo = titulo;
                card.dataset.fecha = fecha;

                card.innerHTML = `
                    <div class="video-container">
                        <iframe data-src="${videoSrc}" allow="encrypted-media" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${titulo}</h3>
                        <span class="card-date-badge">${fecha}</span>
                        <button class="btn-ver" onclick="event.stopPropagation(); abrirModal('${videoSrc}', '${titulo}', '${fecha}')">▶ Ver video</button>
                    </div>
                `;
                fragment.appendChild(card);
            });
            contenedor.appendChild(fragment);

            // Intersection Observer para cargar iframes solo cuando son visibles
            const iframes = document.querySelectorAll('.video-container iframe');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const iframe = entry.target;
                        const src = iframe.dataset.src;
                        if (src && !iframe.src) {
                            iframe.src = src;
                        }
                        observer.unobserve(iframe);
                    }
                });
            }, { rootMargin: '200px' });

            iframes.forEach(iframe => observer.observe(iframe));

            // ============================================================
            // 4. LIGHTBOX / MODAL
            // ============================================================
            window.abrirModal = function(src, titulo, fecha) {
                let modal = document.getElementById('lightboxVideo');
                if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'lightboxVideo';
                    modal.className = 'lightbox';
                    modal.setAttribute('role', 'dialog');
                    modal.setAttribute('aria-modal', 'true');
                    modal.onclick = function(e) {
                        if (e.target === modal) cerrarModal();
                    };
                    modal.innerHTML = `
                        <div class="lightbox-inner" onclick="event.stopPropagation()">
                            <button class="close-btn" onclick="cerrarModal()" aria-label="Cerrar video">×</button>
                            <div class="lightbox-video">
                                <iframe id="modalIframe" src="" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                            <p class="lightbox-caption" id="modalCaption"></p>
                        </div>
                    `;
                    document.body.appendChild(modal);
                }

                const iframe = document.getElementById('modalIframe');
                const caption = document.getElementById('modalCaption');
                iframe.src = src + '?autoplay=1';
                caption.textContent = `${titulo} — ${fecha}`;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            };

            window.cerrarModal = function() {
                const modal = document.getElementById('lightboxVideo');
                if (modal) {
                    modal.style.display = 'none';
                    const iframe = document.getElementById('modalIframe');
                    if (iframe) iframe.src = '';
                    document.body.style.overflow = '';
                }
            };

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') cerrarModal();
            });

            // ============================================================
            // 5. FRASES ROTATORIAS
            // ============================================================
            const frases = [
                '"El amor no se mira, se siente."',
                '"Eres la razón de mi sonrisa más sincera."',
                '"Contigo, el tiempo es solo un susurro."',
                '"Cada latido lleva tu nombre."',
                '"Tu amor es mi lugar favorito en el mundo."',
                '"Eres poesía hecha persona."',
                '"La eternidad no es suficiente para amarte."'
            ];
            let indiceFrase = 0;
            const elFrase = document.getElementById('fraseRotatoria');

            function cambiarFrase() {
                elFrase.style.opacity = '0';
                setTimeout(() => {
                    indiceFrase = (indiceFrase + 1) % frases.length;
                    elFrase.textContent = frases[indiceFrase];
                    elFrase.style.opacity = '1';
                }, 400);
            }
            setInterval(cambiarFrase, 4500);

            // ============================================================
            // 6. ANIMACIÓN DE APARICIÓN DE TARJETAS
            // ============================================================
            const styleSheet = document.createElement('style');
            styleSheet.textContent = `
                @keyframes aparecerCard {
                    from { opacity: 0; transform: translateY(30px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `;
            document.head.appendChild(styleSheet);
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, i) => {
                card.style.animation = `aparecerCard 0.6s ease ${i * 0.05}s both`;
            });

        })();
