(function() {
  'use strict';

  const misRecuerdos = [
    // ... (tu array original sin cambios) ...
    { id: "17EcqwTl7ZgE142WlcI2bSmDBQntQTH5E", titulo: "Risas", fecha: "2023" },
    { id: "12cFguQajr9ykc5qy0QrmU4Cwq09jqYMf", titulo: "Luz en tus ojos", fecha: "2023" },
    // ... (todos los demás) ...
  ];

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
