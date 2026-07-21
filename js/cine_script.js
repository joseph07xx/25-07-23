(function() {
    'use strict';

    const misRecuerdos = [
        { id: "17EcqwTl7ZgE142WlcI2bSmDBQntQTH5E", titulo: "Risas", fecha: "2023" },
        { id: "12cFguQajr9ykc5qy0QrmU4Cwq09jqYMf", titulo: "Luz en tus ojos", fecha: "2023" },
        { id: "10mM0Lyu8vqGp33kIiXKGsGzcO0bAvxJV", titulo: "Sueños compartidos", fecha: "2023" },
        { id: "1kZ9f5t4D1Z9k2-NJdHM89DwWg-GXQWbQ", titulo: "Juntos", fecha: "2023" },
        { id: "1-xA0VinFW8UhhQoZWorheYQaOnsk-1EU", titulo: "Amor verdadero", fecha: "2024" },
        { id: "1aYPNq6lD-n9LRhe2-P_tg1c6DRyutqsp", titulo: "Recuerdo dorado", fecha: "Febrero 2024" },
        { id: "1Zn4nC7C6aGDRawsfPVwzKtXZs13pjwJp", titulo: "Otoño juntos", fecha: "Noviembre 2023" },
        { id: "1W-5xSTh9Cz4_Ejgcr7xftfkbHgEFYTVf", titulo: "Primavera", fecha: "Abril 2024" },
        { id: "1VIGb4E9L0ZnMujg-dTEtfyGwk_zQHhQ8", titulo: "Eres mi hogar", fecha: "Abril 2024" },
        { id: "1FhzwmBUVv5YzTTGaHB7_b26J5KIWGv5l", titulo: "Abril contigo", fecha: "Abril 2024" },
        { id: "12uhLUJBGFEZRTlekdv54mJuROemFiXs9", titulo: "Eres todo", fecha: "Abril 2024" },
        { id: "12VAgMbTlqNkmaL3-h552BXxeCtYsY8x6", titulo: "Instante bello", fecha: "2024" },
        { id: "12usQeIxSrt2Mm3Uwsd5q3Pig879XL1AC", titulo: "Calma", fecha: "2024" },
        { id: "13C45n0Zpxtwx_tBD95-faoNJN7E5SS3B", titulo: "Alegría", fecha: "2024" },
        { id: "13OECDw5pLX0GoLqhwZiaaRwLU028j-f-", titulo: "Paz a tu lado", fecha: "2024" },
        { id: "13tpM0Y-cZFwtfx8OQ7elltM8uNQ6kixE", titulo: "Eres luz", fecha: "2024" },
        { id: "154AxMngzxmcU499NhST8rqgYYELdrUV-", titulo: "Mi persona", fecha: "2024" },
        { id: "15ZsZScL-ve9taB0R3qt7RDVRXU6_iwin", titulo: "Siempre", fecha: "2025" },
        { id: "15wEUbxPRhX2sUEtw9t4VIiN0Tcqh6HuV", titulo: "Contigo", fecha: "2025" },
        { id: "16kD_b7QgxVq4j-cWoDHKgtB9DXgT5wLF", titulo: "Universo nuestro", fecha: "2025" },
        { id: "17MyIWxYotdnzEae95mPc0rvzzaMsd8Ip", titulo: "Eres magia", fecha: "2025" },
        { id: "18_9byESKd8A9VU_AaQefjBAZdCV0utyG", titulo: "Corazón latiendo", fecha: "2025" },
        { id: "18auW03EmZzd16HnOeuNAmC-0Hcldo6qO", titulo: "Días felices", fecha: "2025" },
        { id: "193jW-umS6YeTiAbSwzkGR00KBbN1hkZs", titulo: "Noches", fecha: "2025" },
        { id: "1AMBnW_-lXIjmRblyX22JO706GfxZGhtV", titulo: "Estrellas", fecha: "2025" },
        { id: "1Cj49txzrFOH352gscUQyqXnyjBcBWYys", titulo: "Suspiros", fecha: "2024" },
        { id: "1Dl_BrttB7I4ejNp-dFOc8mwvB43cuUy_", titulo: "Latido", fecha: "2025" },
        { id: "1DrTUZTzSSCs9AOUG7NybpXCC9Tn5cuyH", titulo: "Eres sueño", fecha: "2025" },
        { id: "1EIHypsZ-Molo07ncg4GwdlcfsDm_ihsv", titulo: "Realidad", fecha: "2025" },
        { id: "1EMN0jK74e7xZDffIVQbHHSUXX8yPDr3L", titulo: "Bendición", fecha: "2025" },
        { id: "1F1gQFuTi1QJAhKiCJJBU-4mYQi3k1trS", titulo: "Regalo", fecha: "2025" },
        { id: "1FXvCxZe7bTF44hD_WYPopc_SsuyO0DNq", titulo: "Tesoro", fecha: "2025" },
    ];

    // Algoritmo Fisher-Yates para mezclar los recuerdos
    function mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    mezclarArray(misRecuerdos);

    const urlAudio = [
        "https://ia902800.us.archive.org/5/items/stephen-sanchez-until-i-found-you-official-video-gxld-q-9e-x-2wo_202607/Stephen%20Sanchez%20-%20Until%20I%20Found%20You%20%28Official%20Video%29%20%5BGxldQ9eX2wo%5D.mp3"
    ];

    let container, audioElement;
    let currentIndex = 0;
    let proyeccionIniciada = false;
    let temporizadorActivo = false;
    let intervaloCambio = null;

    function cargarCine() {
        container = document.getElementById('cine-container');
        audioElement = document.getElementById('cine-audio');

        if (!container || !audioElement) return;

        if (urlAudio.length > 0) {
            const source = document.createElement('source');
            source.src = urlAudio[0];
            source.type = 'audio/mp3';
            audioElement.appendChild(source);
            audioElement.load();
        }

        misRecuerdos.forEach((recuerdo) => {
            const url = `https://lh3.googleusercontent.com/d/${recuerdo.id}=w1200`;
            const frame = document.createElement('div');
            frame.className = 'frame';
            frame.innerHTML = `
                <img class="drive-image" src="${url}" alt="${recuerdo.titulo}" loading="lazy" />
                <div class="info-overlay">
                    <h1>${recuerdo.titulo}</h1>
                    <p>${recuerdo.fecha}</p>
                </div>
            `;
            container.appendChild(frame);
        });
    }

    function iniciarProyeccion() {
        if (proyeccionIniciada) return;
        proyeccionIniciada = true;

        const frames = document.querySelectorAll('.frame');
        if (frames.length === 0) return;

        frames[currentIndex].classList.add('active');

        intervaloCambio = setInterval(() => {
            frames[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % frames.length;
            frames[currentIndex].classList.add('active');
        }, 5000);
    }

    function ocultarImagenes() {
        const frames = document.querySelectorAll('.frame');
        frames.forEach(frame => frame.classList.remove('active'));

        if (intervaloCambio) {
            clearInterval(intervaloCambio);
            intervaloCambio = null;
        }
    }

    function cuandoAudioComienza() {
        if (temporizadorActivo) return;
        temporizadorActivo = true;

        setTimeout(() => {
            iniciarProyeccion();
        }, 10000); // 10 segundos de espera antes de mostrar las imágenes
    }

    function intentarAutoplay() {
        const promesa = audioElement.play();
        if (promesa !== undefined) {
            promesa
                .then(() => {
                    cuandoAudioComienza();
                })
                .catch(() => {
                    const handler = function() {
                        audioElement.play()
                            .then(() => {
                                cuandoAudioComienza();
                                document.removeEventListener('click', handler);
                                document.removeEventListener('touchstart', handler);
                            })
                            .catch((err) => console.warn('Error al reproducir:', err));
                    };
                    document.addEventListener('click', handler);
                    document.addEventListener('touchstart', handler);
                });
        }
    }

    function init() {
        cargarCine();
        intentarAutoplay();

        audioElement.addEventListener('ended', function() {
            ocultarImagenes();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
