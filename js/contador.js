    const fechaInicio = new Date(2023, 6, 25, 0, 0, 0);
    const fechaFinal = new Date(2026, 9, 31, 0, 0, 0); // 09 = octubre

    let valoresAnteriores = {};
    let valoresAnterioresRegresivo = {};

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

        if (segundos < 0) { segundos += 60;
            minutos--; }
        if (minutos < 0) { minutos += 60;
            horas--; }
        if (horas < 0) { horas += 24;
            dias--; }
        if (dias < 0) {
            const ultimoDia = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
            dias += ultimoDia;
            meses--;
        }
        if (meses < 0) { meses += 12;
            anos--; }

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

        const maxAnos = 100,
            maxMeses = 12,
            maxDias = 31,
            maxHoras = 24,
            maxMinutos = 60,
            maxSegundos = 60;
        document.getElementById('barraAnos').style.width = Math.min((anos / maxAnos) * 100, 100) + '%';
        document.getElementById('barraMeses').style.width = Math.min((meses / maxMeses) * 100, 100) + '%';
        document.getElementById('barraDias').style.width = Math.min((dias / maxDias) * 100, 100) + '%';
        document.getElementById('barraHoras').style.width = Math.min((horas / maxHoras) * 100, 100) + '%';
        document.getElementById('barraMinutos').style.width = Math.min((minutos / maxMinutos) * 100, 100) + '%';
        document.getElementById('barraSegundos').style.width = Math.min((segundos / maxSegundos) * 100, 100) + '%';
    }
    actualizarContador();
    setInterval(actualizarContador, 1000);

