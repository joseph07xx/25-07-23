(function() {
    'use strict';

    const misRecuerdos = [
        
  { id: "17EcqwTl7ZgE142WlcI2bSmDBQntQTH5E", titulo: "Risas", fecha: "2023" },
  { id: "1sQy4U96PkSsfJxdAjaV9ESIDmJtseITi", titulo: "Sobre", fecha: "2024" },
  { id: "1hIsX0LY2SP3QhoxG2fRM0f6sCy6UVAHj", titulo: "Complicidad", fecha: "Septiembre 2023" },
  { id: "154AxMngzxmcU499NhST8rqgYYELdrUV-", titulo: "Mi persona", fecha: "2024" },
  { id: "1WpM2hkBNdFI8flsxYKIQsdUu1chldtx-", titulo: "Día perfecto", fecha: "Marzo 2024" },
  { id: "13OECDw5pLX0GoLqhwZiaaRwLU028j-f-", titulo: "Paz a tu lado", fecha: "2024" },
  { id: "1e6JoAGWv0rjbqumugOE60wRL0IrjuUzH", titulo: "Rima", fecha: "2025" },
  { id: "1aYPNq6lD-n9LRhe2-P_tg1c6DRyutqsp", titulo: "Recuerdo dorado", fecha: "Febrero 2024" },
  { id: "12cFguQajr9ykc5qy0QrmU4Cwq09jqYMf", titulo: "Luz en tus ojos", fecha: "2023" },
  { id: "1FjWFkhHRK7_mF4zUXPp7oZRUAQdxl1GT", titulo: "Destino", fecha: "Marzo 2024" },
  { id: "1LeI-_xynVSpqGwhjZckgGfcvDPzGare_", titulo: "Lapislázuli", fecha: "2025" },
  { id: "1euFC7s6vTcE4qVKlIVyZdBzFsWFvvisa", titulo: "Estrofa", fecha: "2025" },
  { id: "1tHjGxG5BDemPEYiv84ytGSUcWFVKWoJc", titulo: "Sello", fecha: "2024" },
  { id: "1kgz3egtt3mykgjwqyiio--51vj8n1mfui", titulo: "Cuarzo rosa", fecha: "2025" },
  { id: "1KGZ3EgtT3MYKGjWQyIo--51vj8n1mFUI", titulo: "Cuarzo rosa", fecha: "2025" },
  { id: "1AMBnW_-lXIjmRblyX22JO706GfxZGhtV", titulo: "Estrellas", fecha: "2025" },
  { id: "1-h7ptg3yhupm7dLHLK9gH5LrBBTPXWp7", titulo: "Abrazo eterno", fecha: "Febrero 2024" },
  { id: "1_hqX3nT0VXInR_Z38Y4ZxDRYZWnS0uJL", titulo: "Atardecer juntos", fecha: "Septiembre 2023" },
  { id: "1HM_nuJiiJslTYhuvSOC5L8LkjgWJnL4t", titulo: "Diamante", fecha: "2025" },
  { id: "1LoqaGb3mk8SsdLgkS6KsIQR190QQbmC0", titulo: "Ternura pura", fecha: "2023" },
  { id: "1GMMRtG-r-DlRdRyZL_h5EJBTXGhrddZE", titulo: "Marzo especial", fecha: "Marzo 2024" },
  { id: "1GwMRtG-r-DlRdRyZL_h5EJBTXGhrddZE", titulo: "Marzo especial", fecha: "Marzo 2024" },
  { id: "13tpM0Y-cZFwtfx8OQ7elltM8uNQ6kixE", titulo: "Eres luz", fecha: "2024" },
  { id: "1u5KrA4Xg6erBkkA1A73rg5AHe928Wjbt", titulo: "Cinta", fecha: "2024" },
  { id: "12usQeIxSrt2Mm3Uwsd5q3Pig879XL1AC", titulo: "Calma", fecha: "2024" },
  { id: "193jW-umS6YeTiAbSwzkGR00KBbN1hkZs", titulo: "Noches", fecha: "2025" },
  { id: "1-xA0VinFW8UhhQoZWorheYQaOnsk-1EU", titulo: "Amor verdadero", fecha: "2024" },
  { id: "1RXWuiyqGiOGqsxS5yBdQiOIJeMZ4qCFO", titulo: "Instante único", fecha: "2023" },
  { id: "1sL2vDOhNqwB3eSJ-xfFzOlVUG-QynAII", titulo: "Carta", fecha: "2025" },
  { id: "11mtKk7UWGNKHqpLvwVlCd5NrW99pgFuj", titulo: "Mirada que enamora", fecha: "Agosto 2023" },
  { id: "1ImtKk7UWGNKHqpLvwVlCd5NrW99pgFuj", titulo: "Mirada que enamora", fecha: "Agosto 2023" },
  { id: "1KybgRTrG7ZubIcjoDSzb15_JNJTJpkbc", titulo: "Ópalo", fecha: "2025" },
  { id: "1e6JoAGWv0rjbqumugOE60wRL0IrjuUzH", titulo: "Rima", fecha: "2025" },
  { id: "11W-5xSTh9Cz4_Ejgcr7xftfkbHgEFYTVf", titulo: "Primavera", fecha: "Abril 2024" },
  { id: "1W-5xSTh9Cz4_Ejgcr7xftfkbHgEFYTVf", titulo: "Primavera", fecha: "Abril 2024" },
  { id: "1Zn4nC7C6aGDRawsfPVwzKtXZs13pjwJp", titulo: "Otoño juntos", fecha: "Noviembre 2023" },
  { id: "1KQ7GVmBpbphhV74sCMtg6Ofe5cML0Y2D", titulo: "Jade", fecha: "2025" },
  { id: "13C45n0Zpxtwx_tBD95-faoNJN7E5SS3B", titulo: "Alegría", fecha: "2024" },
  { id: "1bO7EJkx07aiFsBmuyJu4ChEE_YbbH271", titulo: "Sinfonía", fecha: "2025" },
  { id: "1GMMrT...", titulo: "Marzo especial", fecha: "Marzo 2024" },
  { id: "12uhLUJBGFEZRTlekdv54mJuROemFiXs9", titulo: "Eres todo", fecha: "Abril 2024" },
  { id: "112VAgMbTlqNkmaL3-h552BXxeCtYsY8x6", titulo: "Instante bello", fecha: "2024" },
  { id: "12VAgMbTlqNkmaL3-h552BXxeCtYsY8x6", titulo: "Instante bello", fecha: "2024" },
  { id: "1pm2svUFVCKT20qZb9E367L_oBgRJZFx-", titulo: "Nuestro comienzo", fecha: "2023" },
  { id: "1dETq6y8wNtridMk3-SQLLQmnVRDUPkW3", titulo: "Poesía", fecha: "2025" },
  { id: "1kZ9f5t4D1Z9k2-NJdHM89DwWg-GXQWbQ", titulo: "Juntos", fecha: "2023" },
  { id: "1Cj49txzrFOH352gscUQyqXnyjBcBWYys", titulo: "Suspiros", fecha: "2024" },
  { id: "1am_Q7Isyn9K2kEYUFeR7iFNLeQL9IVcq", titulo: "Armonía", fecha: "2025" },
  { id: "115wEUbxPRhX2sUEtw9t4VIiN0Tcqh6HuV", titulo: "Contigo", fecha: "2025" },
  { id: "15wEUbxPRhX2sUEtw9t4VIiN0Tcqh6HuV", titulo: "Contigo", fecha: "2025" },
  { id: "11FhzwmBUVv5YzTTGaHB7_b26J5KIWGv5l", titulo: "Abril contigo", fecha: "Abril 2024" },
  { id: "1FhzwmBUVv5YzTTGaHB7_b26J5KIWGv5l", titulo: "Abril contigo", fecha: "Abril 2024" },
  { id: "10mM0Lyu8vqGp33kIiXKGsGzcO0bAvxJV", titulo: "Sueños compartidos", fecha: "2023" },
  { id: "1YfjEEAIHluwhmJLrKSKgs2ndor8HQKK_", titulo: "Encaje", fecha: "2025" },
  { id: "1EMN0jK74e7xZDffIVQbHHSUXX8yPDr3L", titulo: "Bendición", fecha: "2025" },
  { id: "118auW03EmZzd16HnOeuNAmC-0Hcldo6qO", titulo: "Días felices", fecha: "2025" },
  { id: "18auW03EmZzd16HnOeuNAmC-0Hcldo6qO", titulo: "Días felices", fecha: "2025" },
  { id: "17MyIWxYotdnzEae95mPc0rvzzaMsd8Ip", titulo: "Eres magia", fecha: "2025" },
  { id: "1jzW6JpuorRkHtunkSsgugtlgFnDnqyh2", titulo: "Página", fecha: "2025" },
  { id: "11M-3DoHhw6_TcKlcimCkRKq_GBVzxCz55", titulo: "Ámbar", fecha: "2025" },
  { id: "1M-3DoHhw6_TcKlcimCkRKq_GBVzxCz55", titulo: "Ámbar", fecha: "2025" },
  { id: "1FXvCxZe7bTF44hD_WYPopc_SsuyO0DNq", titulo: "Tesoro", fecha: "2025" },
  { id: "115ZsZScL-ve9taB0R3qt7RDVRXU6_iwin", titulo: "Siempre", fecha: "2025" },
  { id: "15ZsZScL-ve9taB0R3qt7RDVRXU6_iwin", titulo: "Siempre", fecha: "2025" },
  { id: "11DrTUZTzSSCs9AOUG7NybpXCC9Tn5cuyH", titulo: "Eres sueño", fecha: "2025" },
  { id: "1DrTUZTzSSCs9AOUG7NybpXCC9Tn5cuyH", titulo: "Eres sueño", fecha: "2025" },
  { id: "1F1gQFuTi1QJAhKiCJJBU-4mYQi3k1trS", titulo: "Regalo", fecha: "2025" },
  { id: "1GMnM__iXXq1Of0pVU69bRE2hAOfElATP_", titulo: "Perla", fecha: "2025" },
  { id: "1GnM__iXXq1Of0pVU69bRE2hAOfElATP_", titulo: "Perla", fecha: "2025" },
  { id: "116kD_b7QgxVq4j-cWoDHKgtB9DXgT5wLF", titulo: "Universo nuestro", fecha: "2025" },
  { id: "16kD_b7QgxVq4j-cWoDHKgtB9DXgT5wLF", titulo: "Universo nuestro", fecha: "2025" },
  { id: "11NCmqa2idy_n0VIhQWAcaOv3BT9_RoZKM", titulo: "Nácar", fecha: "2025" },
  { id: "1NCmqa2idy_n0VIhQWAcaOv3BT9_RoZKM", titulo: "Nácar", fecha: "2025" },
  { id: "11SV1RXacphAOd_PBPwnNaHACMBs9VdkJQ", titulo: "Marfil", fecha: "2025" },
  { id: "1SV1RXacphAOd_PBPwnNaHACMBs9VdkJQ", titulo: "Marfil", fecha: "2025" },
  { id: "11Hn0lUiwH9HK-tLX60CCPY0J8MVWyUbDc", titulo: "Esmeralda", fecha: "2025" },
  { id: "1Hn0lUiwH9HK-tLX60CCPY0J8MVWyUbDc", titulo: "Esmeralda", fecha: "2025" },
  { id: "11y783ZM6d33rc9igv2be9m0XrKYtVxbUc", titulo: "Noche mágica", fecha: " 2024" },
  { id: "1y783ZM6d33rc9igv2be9m0XrKYtVxbUc", titulo: "Noche mágica", fecha: " 2024" },
  { id: "11JzUhCmRV13t3gBgc2zZKUFj3K0H79Etf", titulo: "Topacio", fecha: "2025" },
  { id: "1JzUhCmRV13t3gBgc2zZKUFj3K0H79Etf", titulo: "Topacio", fecha: "2025" },
  { id: "11HXNTni0bZbfRWbWfpiECkNN9GMfvG3dt", titulo: "Zafiro", fecha: "2025" },
  { id: "1HXNTni0bZbfRWbWfpiECkNN9GMfvG3dt", titulo: "Zafiro", fecha: "2025" },
  { id: "118_9byESKd8A9VU_AaQefjBAZdCV0utyG", titulo: "Corazón latiendo", fecha: "2025" },
  { id: "18_9byESKd8A9VU_AaQefjBAZdCV0utyG", titulo: "Corazón latiendo", fecha: "2025" },
  { id: "11towosIbi-GSdBp87a195-jmXeGQgbrx3", titulo: "Lacre", fecha: "2024" },
  { id: "1towosIbi-GSdBp87a195-jmXeGQgbrx3", titulo: "Lacre", fecha: "2024" },
  { id: "11LMcnHC5yF-p4cD8wxIeOOjksTPv4CAVa", titulo: "Turquesa", fecha: "2025" },
  { id: "1LMcnHC5yF-p4cD8wxIeOOjksTPv4CAVa", titulo: "Turquesa", fecha: "2025" },
  { id: "11HWydhbUqm0w7-cwbEvn8jzVa2g3Sh0eW", titulo: "Rubí", fecha: "2025" },
  { id: "1HWydhbUqm0w7-cwbEvn8jzVa2g3Sh0eW", titulo: "Rubí", fecha: "2025" },
  { id: "11Dl_BrttB7I4ejNp-dFOc8mwvB43cuUy_", titulo: "Latido", fecha: "2025" },
  { id: "1Dl_BrttB7I4ejNp-dFOc8mwvB43cuUy_", titulo: "Latido", fecha: "2025" },
  { id: "11K05XnWZ0djY9hKd9Aux7p6FpDfsgz44t", titulo: "Amatista", fecha: "2025" },
  { id: "1K05XnWZ0djY9hKd9Aux7p6FpDfsgz44t", titulo: "Amatista", fecha: "2025" },
  { id: "11M7vwn9RN0qg1gK07I3KmbiwocfvvVxWO", titulo: "Coral", fecha: "2025" },
  { id: "1M7vwn9RN0qg1gK07I3KmbiwocfvvVxWO", titulo: "Coral", fecha: "2025" },
  { id: "11ZJsrpUmEntqyg0Bi9NYw6xlVQVke0qgq", titulo: "Susurro", fecha: "2025" },
  { id: "1ZJsrpUmEntqyg0Bi9NYw6xlVQVke0qgq", titulo: "Susurro", fecha: "2025" },
  { id: "11rhdwjxZ2G2r6yglLSVOJKWMD8tfcmz7m", titulo: "Pluma", fecha: "2025" },
  { id: "1rhdwjxZ2G2r6yglLSVOJKWMD8tfcmz7m", titulo: "Pluma", fecha: "2025" },
  { id: "11uPJNqlBHWM1bPp2RfxNdQOpUHnhaWi1V", titulo: "Lazo", fecha: "2024" },
  { id: "1uPJNqlBHWM1bPp2RfxNdQOpUHnhaWi1V", titulo: "Lazo", fecha: "2024" },
  { id: "11dNyEoGxA_qVG7kxwsjDm-dP0cxjMiEGk", titulo: "Verso", fecha: "2025" },
  { id: "1dNyEoGxA_qVG7kxwsjDm-dP0cxjMiEGk", titulo: "Verso", fecha: "2025" },
  { id: "11vg9FJepBIttjQVFJIPhzh2N7EeWO79Jy", titulo: "Nudo", fecha: "2024" },
  { id: "1vg9FJepBIttjQVFJIPhzh2N7EeWO79Jy", titulo: "Nudo", fecha: "2024" },
  { id: "11raURod2CDejJ4z27MRp6ZyN4zA9hkliu", titulo: "Tinta", fecha: "2024" },
  { id: "1raURod2CDejJ4z27MRp6ZyN4zA9hkliu", titulo: "Tinta", fecha: "2024" },
  { id: "11WwpEJ0xN-TH21dmMT76qMMPacrBhovkp", titulo: "Seda", fecha: "2024" },
  { id: "1WwpEJ0xN-TH21dmMT76qMMPacrBhovkp", titulo: "Seda", fecha: "2024" },
  { id: "11wr43q4qxY5INtBVfxPX1vU-18kml6QzZ", titulo: "Eternidad", fecha: "2024" },
  { id: "1wr43q4qxY5INtBVfxPX1vU-18kml6QzZ", titulo: "Eternidad", fecha: "2024" },
  { id: "11YMJRD3zua6KS3IMvlnOeTJ1lljX2Wm5m", titulo: "Terciopelo", fecha: "2025" },
  { id: "1YMJRD3zua6KS3IMvlnOeTJ1lljX2Wm5m", titulo: "Terciopelo", fecha: "2025" },
  { id: "11gmwhEwy1tuWsN_UVvV1_a6ImmFY6bTCc", titulo: "Capítulo", fecha: "2025" },
  { id: "1gmwhEwy1tuWsN_UVvV1_a6ImmFY6bTCc", titulo: "Capítulo", fecha: "2025" },
  { id: "11ZSc6ZgF0Q9g1O3tClZ6EeuhsmlpCpNw1", titulo: "Melodía", fecha: "2025" },
  { id: "1ZSc6ZgF0Q9g1O3tClZ6EeuhsmlpCpNw1", titulo: "Melodía", fecha: "2025" },
  { id: "11EIHypsZ-Molo07ncg4GwdlcfsDm_ihsv", titulo: "Realidad", fecha: "2025" },
  { id: "1EIHypsZ-Molo07ncg4GwdlcfsDm_ihsv", titulo: "Realidad", fecha: "2025" },
  { id: "1WN4bmVzBAEt43aTIfbwcNDsclg2k7BQc", titulo: "Sonrisas sinceras", fecha: "Octubre 2024" },
  { id: "1Uw1HEWmzd135g4ysusOsi7JLywbLvkHL", titulo: "Refugio", fecha: "Octubre 2023" },
  { id: "1VIGb4E9L0ZnMujg-dTEtfyGwk_zQHhQ8", titulo: "Eres mi hogar", fecha: "Abril 2024" }

    ];

    // 🔗 ARRAY DE AUDIOS (Puedes agregar más enlaces aquí si lo deseas)
    const urlAudio = [
        "https://ia903208.us.archive.org/28/items/john-denver-annies-song-official-audio-rnotf-zn-qyw/John%20Denver%20-%20Annie%27s%20Song%20%28Official%20Audio%29%20%5BRNOTF-znQyw%5D.mp3","https://ia902800.us.archive.org/5/items/stephen-sanchez-until-i-found-you-official-video-gxld-q-9e-x-2wo_202607/Stephen%20Sanchez%20-%20Until%20I%20Found%20You%20%28Official%20Video%29%20%5BGxldQ9eX2wo%5D.mp3"
    ];

    const container = document.getElementById('cine-container');
    const audioElement = document.getElementById('cine-audio');
    let currentIndex = 0;
    let proyeccionIniciada = false;
    let temporizadorActivo = false;
    let intervaloCambio = null;

    function cargarCine() {
        // Tomamos el primer elemento del array (índice 0) para colocarlo en el audio
        if (urlAudio.length > 0) {
            const source = document.createElement('source');
            source.src = urlAudio[0]; // Usamos la primera pista del array
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

        console.log('⏹️ Imágenes ocultadas (audio terminado)');
    }

    function cuandoAudioComienza() {
        if (temporizadorActivo) return;
        temporizadorActivo = true;

        console.log('🎵 Audio en reproducción. Esperando 10s para mostrar imágenes...');

        setTimeout(() => {
            iniciarProyeccion();
        }, 10000);
    }

    function intentarAutoplay() {
        const promesa = audioElement.play();
        if (promesa !== undefined) {
            promesa
                .then(() => {
                    cuandoAudioComienza();
                })
                .catch(() => {
                    console.warn('⚠️ Autoplay bloqueado. Esperando clic/touch del usuario.');
                    const handler = function(e) {
                        audioElement.play()
                            .then(() => {
                                cuandoAudioComienza();
                                document.removeEventListener('click', handler);
                                document.removeEventListener('touchstart', handler);
                            })
                            .catch((err) => console.warn('Error al reproducir con interacción:', err));
                    };
                    document.addEventListener('click', handler);
                    document.addEventListener('touchstart', handler);
                });
        } else {
            audioElement.play();
            cuandoAudioComienza();
        }
    }

    function init() {
        cargarCine();
        intentarAutoplay();

        audioElement.addEventListener('ended', function() {
            ocultarImagenes();
            console.log('🔚 Audio finalizado, pantalla negra.');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
