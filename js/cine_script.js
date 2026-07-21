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
            { id: "1GnM__iXXq1Of0pVU69bRE2hAOfElATP_", titulo: "Perla", fecha: "2025" },
            { id: "1HM_nuJiiJslTYhuvSOC5L8LkjgWJnL4t", titulo: "Diamante", fecha: "2025" },
      ];

      const container = document.getElementById('cine-container');
      const audioElement = document.getElementById('cine-audio');
      let currentIndex = 0;
      let proyeccionIniciada = false;
      let temporizadorActivo = false;
      let intervaloCambio = null;

      // 1. Cargar los frames (todos ocultos)
      function cargarCine() {
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

      // 2. Iniciar la proyección de imágenes (mostrar primera y luego cambiar cada 5s)
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

          console.log('🎵 Audio en reproducción. Esperando 34.5s para mostrar imágenes...');

          // Iniciar proyección a los 34.5 segundos
          setTimeout(() => {
              iniciarProyeccion();
          }, 10000);

          // 🔹 Ya no necesitamos el temporizador de 4m34s porque ahora usamos el evento 'ended'
          // Elimino ese setTimeout para que sea el fin del audio el que active el ocultamiento.
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

          // 🔹 NUEVO: Escuchar el final del audio para ocultar imágenes y detener el intervalo
          audioElement.addEventListener('ended', function() {
              ocultarImagenes();
              // Opcional: también podrías pausar el audio (ya terminó)
              // audioElement.pause();
              console.log('🔚 Audio finalizado, pantalla negra.');
          });
      }

      if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', init);
      } else {
          init();
      }
    })();
