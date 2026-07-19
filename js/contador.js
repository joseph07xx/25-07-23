const fechaInicio = new Date(2023, 6, 25, 0, 0, 0);
const fechaFinal = new Date(2026, 9, 31, 0, 0, 0); // 09 = octubre (no se usa)

let valoresAnteriores = {};

/**
 * Actualiza el texto de un elemento si existe y ha cambiado.
 */
function actualizarTexto(id, valor) {
    const el = document.getElementById(id);
    if (el && el.textContent !== String(valor)) {
        el.textContent = valor;
        // Animación de salto (si la clase existe)
        el.classList.remove('numero-saltar');
        void el.offsetWidth; // fuerza reflow
        el.classList.add('numero-saltar');
    }
}

/**
 * Actualiza el ancho de una barra de progreso si el elemento existe.
 */
function actualizarBarra(id, valor, maximo) {
    const el = document.getElementById(id);
    if (el) {
        const porcentaje = Math.min((valor / maximo) * 100, 100);
        el.style.width = porcentaje + '%';
    }
}

function actualizarContador() {
    const ahora = new Date();
    const diffMs = ahora - fechaInicio;
    const totalSeg = Math.floor(diffMs / 1000);

    // Cálculo de años, meses, días, horas, minutos, segundos
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

    // Actualizar números con animación (solo si existen)
    actualizarTexto('anos', anos);
    actualizarTexto('meses', meses);
    actualizarTexto('dias', dias);
    actualizarTexto('horas', horas);
    actualizarTexto('minutos', minutos);
    actualizarTexto('segundos', segundos);

    // Total de segundos (si existe)
    const totalEl = document.getElementById('totalSegundos');
    if (totalEl) {
        totalEl.textContent = totalSeg.toLocaleString('es-ES');
    }

    // Barras de progreso (si existen)
    actualizarBarra('barraAnos', anos, 100);
    actualizarBarra('barraMeses', meses, 12);
    actualizarBarra('barraDias', dias, 31);
    actualizarBarra('barraHoras', horas, 24);
    actualizarBarra('barraMinutos', minutos, 60);
    actualizarBarra('barraSegundos', segundos, 60);
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    setInterval(actualizarContador, 1000);
});
