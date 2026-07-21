(function() {
  'use strict';

  const misRecuerdos = [
    // ... (tu array original sin cambios) ...
    { id: "17EcqwTl7ZgE142WlcI2bSmDBQntQTH5E", titulo: "Risas", fecha: "2023" },
    { id: "12cFguQajr9ykc5qy0QrmU4Cwq09jqYMf", titulo: "Luz en tus ojos", fecha: "2023" },
    { id: "1aYPNq6lD-n9LRhe2-P_tg1c6DRyutqsp", titulo: "Recuerdo dorado", fecha: "Febrero 2024" },
            { id: "1Zn4nC7C6aGDRawsfPVwzKtXZs13pjwJp", titulo: "Otoño juntos", fecha: "Noviembre 2023" },
            { id: "1W-5xSTh9Cz4_Ejgcr7xftfkbHgEFYTVf", titulo: "Primavera", fecha: "Abril 2024" },
            { id: "1VIGb4E9L0ZnMujg-dTEtfyGwk_zQHhQ8", titulo: "Eres mi hogar", fecha: "Abril 2024" },
            { id: "1GwMRtG-r-DlRdRyZL_h5EJBTXGhrddZE", titulo: "Marzo especial", fecha: "Marzo 2024" },
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
            { id: "1GnM__iXXq1Of0pVU69bRE2hAOfElATP_", titulo: "Perla", fecha: "2025" },
            { id: "1HM_nuJiiJslTYhuvSOC5L8LkjgWJnL4t", titulo: "Diamante", fecha: "2025" },
            { id: "1HWydhbUqm0w7-cwbEvn8jzVa2g3Sh0eW", titulo: "Rubí", fecha: "2025" },
            { id: "1HXNTni0bZbfRWbWfpiECkNN9GMfvG3dt", titulo: "Zafiro", fecha: "2025" },
            { id: "1Hn0lUiwH9HK-tLX60CCPY0J8MVWyUbDc", titulo: "Esmeralda", fecha: "2025" },
            { id: "1JzUhCmRV13t3gBgc2zZKUFj3K0H79Etf", titulo: "Topacio", fecha: "2025" },
            { id: "1K05XnWZ0djY9hKd9Aux7p6FpDfsgz44t", titulo: "Amatista", fecha: "2025" },
            { id: "1KGZ3EgtT3MYKGjWQyIo--51vj8n1mFUI", titulo: "Cuarzo rosa", fecha: "2025" },
            { id: "1KQ7GVmBpbphhV74sCMtg6Ofe5cML0Y2D", titulo: "Jade", fecha: "2025" },
            { id: "1KybgRTrG7ZubIcjoDSzb15_JNJTJpkbc", titulo: "Ópalo", fecha: "2025" },
            { id: "1LMcnHC5yF-p4cD8wxIeOOjksTPv4CAVa", titulo: "Turquesa", fecha: "2025" },
            { id: "1LeI-_xynVSpqGwhjZckgGfcvDPzGare_", titulo: "Lapislázuli", fecha: "2025" },
            { id: "1M-3DoHhw6_TcKlcimCkRKq_GBVzxCz55", titulo: "Ámbar", fecha: "2025" },
            { id: "1M7vwn9RN0qg1gK07I3KmbiwocfvvVxWO", titulo: "Coral", fecha: "2025" },
            { id: "1NCmqa2idy_n0VIhQWAcaOv3BT9_RoZKM", titulo: "Nácar", fecha: "2025" },
            { id: "1SV1RXacphAOd_PBPwnNaHACMBs9VdkJQ", titulo: "Marfil", fecha: "2025" },
            { id: "1WwpEJ0xN-TH21dmMT76qMMPacrBhovkp", titulo: "Seda", fecha: "2024" },
            { id: "1YMJRD3zua6KS3IMvlnOeTJ1lljX2Wm5m", titulo: "Terciopelo", fecha: "2025" },
            { id: "1YfjEEAIHluwhmJLrKSKgs2ndor8HQKK_", titulo: "Encaje", fecha: "2025" },
            { id: "1ZJsrpUmEntqyg0Bi9NYw6xlVQVke0qgq", titulo: "Susurro", fecha: "2025" },
            { id: "1ZSc6ZgF0Q9g1O3tClZ6EeuhsmlpCpNw1", titulo: "Melodía", fecha: "2025" },
            { id: "1am_Q7Isyn9K2kEYUFeR7iFNLeQL9IVcq", titulo: "Armonía", fecha: "2025" },
            { id: "1bO7EJkx07aiFsBmuyJu4ChEE_YbbH271", titulo: "Sinfonía", fecha: "2025" },
            { id: "1dETq6y8wNtridMk3-SQLLQmnVRDUPkW3", titulo: "Poesía", fecha: "2025" },
            { id: "1dNyEoGxA_qVG7kxwsjDm-dP0cxjMiEGk", titulo: "Verso", fecha: "2025" },
            { id: "1e6JoAGWv0rjbqumugOE60wRL0IrjuUzH", titulo: "Rima", fecha: "2025" },
            { id: "1euFC7s6vTcE4qVKlIVyZdBzFsWFvvisa", titulo: "Estrofa", fecha: "2025" },
            { id: "1gmwhEwy1tuWsN_UVvV1_a6ImmFY6bTCc", titulo: "Capítulo", fecha: "2025" },
            { id: "1jzW6JpuorRkHtunkSsgugtlgFnDnqyh2", titulo: "Página", fecha: "2025" },
            { id: "1raURod2CDejJ4z27MRp6ZyN4zA9hkliu", titulo: "Tinta", fecha: "2024" },
            { id: "1rhdwjxZ2G2r6yglLSVOJKWMD8tfcmz7m", titulo: "Pluma", fecha: "2025" },
            { id: "1sL2vDOhNqwB3eSJ-xfFzOlVUG-QynAII", titulo: "Carta", fecha: "2025" },
            { id: "1sQy4U96PkSsfJxdAjaV9ESIDmJtseITi", titulo: "Sobre", fecha: "2024" },
            { id: "1tHjGxG5BDemPEYiv84ytGSUcWFVKWoJc", titulo: "Sello", fecha: "2024" },
            { id: "1towosIbi-GSdBp87a195-jmXeGQgbrx3", titulo: "Lacre", fecha: "2024" },
            { id: "1u5KrA4Xg6erBkkA1A73rg5AHe928Wjbt", titulo: "Cinta", fecha: "2024" },
            { id: "1uPJNqlBHWM1bPp2RfxNdQOpUHnhaWi1V", titulo: "Lazo", fecha: "2024" },
            { id: "1vg9FJepBIttjQVFJIPhzh2N7EeWO79Jy", titulo: "Nudo", fecha: "2024" },
            { id: "1wr43q4qxY5INtBVfxPX1vU-18kml6QzZ", titulo: "Eternidad", fecha: "2024" }  ];

  // Ya no es necesario mezclar el array al inicio, porque elegiremos índices aleatorios
  // pero puedes mantenerlo si quieres que el orden inicial (al cargar) también sea aleatorio.
  // De todas formas, la función de mezcla no se usa en esta versión.

  const urlAudio = [
    "https://ia902800.us.archive.org/5/items/stephen-sanchez-until-i-found-you-official-video-gxld-q-9e-x-2wo_202607/Stephen%20Sanchez%20-%20Until%20I%20Found%20You%20%28Official%20Video%29%20%5BGxldQ9eX2wo%5D.mp3"
  ];

  const container = document.getElementById('cine-container');
  const audioElement = document.getElementById('cine-audio');
  let currentIndex = 0;      // Solo se usa para la primera activación, luego se ignora
  let proyeccionIniciada = false;
  let temporizadorActivo = false;
  let intervaloCambio = null;

  // 1. Cargar los frames (en el orden original del array, da igual porque luego elegimos al azar)
  function cargarCine() {
    if (urlAudio.length > 0) {
      const source = document.createElement('source');
      source.src = urlAudio[0];
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

  // 2. Iniciar la proyección con selección aleatoria en cada paso
  function iniciarProyeccion() {
    if (proyeccionIniciada) return;
    proyeccionIniciada = true;

    const frames = document.querySelectorAll('.frame');
    if (frames.length === 0) return;

    // Elegir un primer índice aleatorio
    currentIndex = Math.floor(Math.random() * frames.length);
    frames[currentIndex].classList.add('active');

    intervaloCambio = setInterval(() => {
      // Quitar la imagen actual
      frames[currentIndex].classList.remove('active');

      // Elegir un nuevo índice aleatorio (distinto al actual si hay más de una imagen)
      let nuevoIndex;
      do {
        nuevoIndex = Math.floor(Math.random() * frames.length);
      } while (nuevoIndex === currentIndex && frames.length > 1);

      currentIndex = nuevoIndex;
      frames[currentIndex].classList.add('active');
    }, 5000); // Cambia cada 5 segundos
  }

  // 3. Función para ocultar todas las imágenes y detener el intervalo
  function ocultarImagenes() {
    const frames = document.querySelectorAll('.frame');
    frames.forEach(frame => frame.classList.remove('active'));

    if (intervaloCambio) {
      clearInterval(intervaloCambio);
      intervaloCambio = null;
    }
    console.log('⏹️ Imágenes ocultadas (audio terminado)');
  }

  // 4. Función que se llama cuando el audio comienza a reproducirse
  function cuandoAudioComienza() {
    if (temporizadorActivo) return;
    temporizadorActivo = true;
    console.log('🎵 Audio en reproducción. Esperando 10s para mostrar imágenes...');
    setTimeout(() => {
      iniciarProyeccion();
    }, 10000);
  }

  // 5. Intento de autoplay al cargar
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

  // 6. Inicialización
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
