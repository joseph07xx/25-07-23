
        // ==========================
        //  DATA
        // ==========================
        const archivos = [  {
            id: 1,
            titulo: '¿Cómo me enamoré de ti?',
            descripcion: 'Presentación interactiva con emociones y storytelling.',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1zKGVzl6ravtjz8GxewT4o3_l7lI7nr8a/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '12 mar 2026',
            tamaño: '84.6 MB',
            etiquetas: ['storytelling', 'personal']
        }, {
            id: 2,
            titulo: '25-12-2024',
            descripcion: '5 Meses',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1HbVyMEe7XrmT7TJCtmmmzfF2ae_LXVmL/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '05 feb 2026',
            tamaño: '59.4 MB',
            etiquetas: ['emociones', 'amor']
        }, {
            id: 3,
            titulo: 'INSTRUCCIONES',
            descripcion: 'Documento guia sobre los regalos.',
            tipo: 'documento',
            icono: 'fa-file-word',
            color: '#2c7be0',
            url: 'https://docs.google.com/document/d/1Y7RX12QQCwTFKUsuFR7ErSG7RELPxqeu/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '23 oct 2023',
            tamaño: '20.9Kb',
            etiquetas: ['reglas', 'detalles']
        }, {
            id: 4,
            titulo: 'Felices 4 meses',
            descripcion: 'Documento Especial',
            tipo: 'documento',
            icono: 'fa-file-word',
            color: '#2c7be0',
            url: 'https://docs.google.com/document/d/1W3WTa96gDz7FG4QLJnVRExIu1oQHVvPh/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '28 oct 23',
            tamaño: '38.5 Kb',
            etiquetas: ['frase', 'amor']
        }, {
            id: 5,
            titulo: 'Regalo 1',
            descripcion: 'Regalo 1',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1U8d9mShS2AqTZucx_6rgRJyZXJqhR5Zm/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '14 oct 23',
            tamaño: '1.1 MB',
            etiquetas: ['recuerdos', 'especial']
        }, {
            id: 6,
            titulo: 'Otro regalito más (2)',
            descripcion: 'Regalo',
            tipo: 'documento',
            icono: 'fa-file-word',
            color: '#2c7be0',
            url: 'https://docs.google.com/document/d/1Y7RX12QQCwTFKUsuFR7ErSG7RELPxqeu/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '23 oct 23',
            tamaño: '21.6 Kb',
            etiquetas: ['regalito', 'gift']
        }, {
            id: 7,
            titulo: 'Regalo',
            descripcion: 'Regalo #17',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1zO9xvwNYJ_Ux3YAvXpkRRFgYA0pj7mIU/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '20 oct 23',
            tamaño: '4.1 MB',
            etiquetas: ['regalo', 'especial']
        }, {
            id: 8,
            titulo: 'Regalo 18',
            descripcion: 'Regalo 18',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1lSR3sPkN9vokzOgdFyXaD38pql3P2cBj/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '22 oct 23',
            tamaño: '2.7 MB',
            etiquetas: ['recuerdos', 'especial']
        }, {
            id: 9,
            titulo: 'Regalo 19',
            descripcion: 'Documento regalito.',
            tipo: 'documento',
            icono: 'fa-file-word',
            color: '#2c7be0',
            url: 'https://docs.google.com/document/d/1EOD7-6rsHyi5dkmEOziIREy3vgOV5Cog/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '22 oct 2023',
            tamaño: '31.6 Kb',
            etiquetas: ['reglas', 'detalles']
        }, {
            id: 10,
            titulo: 'Regalo 21',
            descripcion: 'Regalo "21',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1ZwEguykxlpRc38iWtVEZUKyrx6dm-CCy/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '20 oct 23',
            tamaño: '18.1 MB',
            etiquetas: ['recuerdos', 'especial']
        }, {
            id: 11,
            titulo: 'Otro Regalito 23',
            descripcion: 'Documento Regalo #23.',
            tipo: 'documento',
            icono: 'fa-file-word',
            color: '#2c7be0',
            url: 'https://docs.google.com/document/d/1LStBxH8LdCZIOTpM0u72mWg4Rk-aYNDV/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '20 oct 2023',
            tamaño: '31.4Kb',
            etiquetas: ['reglas', 'detalles']
        }, {
            id: 12,
            titulo: 'Regalo 23',
            descripcion: 'Regalo #23',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1zi15_Q3wqJsUTKo-oVPaju77wOVibshD/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '22 oct 23',
            tamaño: '2.2 MB',
            etiquetas: ['recuerdos', 'especial']
        }, {
            id: 13,
            titulo: 'Otro regalito #24',
            descripcion: 'Documento Regalito.',
            tipo: 'documento',
            icono: 'fa-file-word',
            color: '#2c7be0',
            url: 'https://docs.google.com/document/d/17iwzC9VNO-fqyb0b1NhvoW2XYT1DOQ1E/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '22 oct 2023',
            tamaño: '20.9 Kb',
            etiquetas: ['reglas', 'detalles']
        }, {
            id: 14,
            titulo: 'Regalo 24',
            descripcion: 'Regalo #24',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1zKT3WNaQ-lMpH2chqi4rzz8ZG-h5aW48/edit?usp=sharing&ouid=109494503441183465304&rtpof=true&sd=true',
            fecha: '21 oct 23',
            tamaño: '9.5 MB',
            etiquetas: ['recuerdos', 'especial']
        }, {
            id: 15,
            titulo: 'Otro Regalito 24',
            descripcion: 'Regalo #24',
            tipo: 'presentacion',
            icono: 'fa-file-powerpoint',
            color: '#e67e22',
            url: 'https://docs.google.com/presentation/d/1JYqduv0fbcOEDP81rphLWLnP6Bm2Jv1JcPdXzpJYFJY/edit?usp=sharing',
            fecha: '20 oct 23',
            tamaño: '14.9 MB',
            etiquetas: ['recuerdos', 'especial']
        }];

        // ==========================
        //  DOM REFS
        // ==========================
        const container = document.getElementById('gridContainer');
        const lightbox = document.getElementById('lightbox');
        const visor = document.getElementById('visor');
        const cerrarBtn = document.getElementById('cerrar');
        const searchInput = document.getElementById('searchInput');
        const themeToggle = document.getElementById('themeToggle');
        const gridViewBtn = document.getElementById('gridViewBtn');
        const listViewBtn = document.getElementById('listViewBtn');
        const filterButtons = document.querySelectorAll('.filter-tag');

        let currentFilter = 'all';
        let currentView = 'grid';
        let searchTerm = '';

        // ==========================
        //  RENDER
        // ==========================
        function render() {
            const filtered = archivos.filter(file => {
                // filtro
                if (currentFilter !== 'all' && file.tipo !== currentFilter) return false;
                // búsqueda
                if (searchTerm) {
                    const term = searchTerm.toLowerCase();
                    return file.titulo.toLowerCase().includes(term) ||
                        file.descripcion.toLowerCase().includes(term) ||
                        file.etiquetas.some(t => t.toLowerCase().includes(term));
                }
                return true;
            });

            // Actualizar stats
            document.getElementById('totalCount').textContent = filtered.length;
            document.getElementById('pdfCount').textContent = filtered.filter(f => f.tipo === 'pdf').length;
            document.getElementById('pptCount').textContent = filtered.filter(f => f.tipo === 'presentacion').length;
            document.getElementById('docCount').textContent = filtered.filter(f => f.tipo === 'documento' || f.tipo === 'hoja')
            .length;

            if (filtered.length === 0) {
                container.innerHTML =
                    `<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-muted);"><i class="fas fa-search" style="font-size:40px; display:block; margin-bottom:16px;"></i> No se encontraron archivos</div>`;
                return;
            }

            container.innerHTML = filtered.map((file, index) => `
                <div class="card" style="animation-delay:${index * 0.04}s">
                    <div class="card-icon" style="background:${file.color}20; color:${file.color};">
                        <i class="fas ${file.icono}"></i>
                    </div>
                    <div class="card-body">
                        <h3>${file.titulo}</h3>
                        <p>${file.descripcion}</p>
                        <div class="card-meta">
                            <span><i class="far fa-calendar-alt"></i> ${file.fecha}</span>
                            <span><i class="far fa-file"></i> ${file.tamaño}</span>
                        </div>
                        <div class="card-tags">
                            ${file.etiquetas.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="btn-primary" onclick="abrir('${file.url}')">
                            <i class="fas fa-eye"></i> Ver
                        </button>
                        
                        
                    </div>
                </div>
            `).join('');

            // Aplicar vista
            if (currentView === 'list') {
                container.classList.add('list-view');
            } else {
                container.classList.remove('list-view');
            }
        }

        // ==========================
        //  LIGHTBOX
        // ==========================
        function abrir(url) {
            visor.src = url;
            lightbox.classList.add('open');
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            // Forzar reflow para transición
            void lightbox.offsetWidth;
            lightbox.style.opacity = '1';
        }

        function cerrar() {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.style.display = 'none';
                visor.src = '';
                document.body.style.overflow = 'auto';
                lightbox.classList.remove('open');
            }, 350);
        }

        // Cerrar clic fuera
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) cerrar();
        });

        // Cerrar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') cerrar();
        });

        cerrarBtn.addEventListener('click', cerrar);

        // ==========================
        //  DESCARGA (simulada)
        // ==========================
        function descargar(titulo) {
            const msg = `📥 Descargando "${titulo}"... (simulación)`;
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
                background: var(--bg-card); color: var(--text-primary);
                padding: 14px 28px; border-radius: 60px;
                box-shadow: 0 12px 40px rgba(0,0,0,0.2);
                font-weight: 500; z-index: 9999;
                border: 1px solid var(--border-light);
                backdrop-filter: blur(8px);
                animation: fadeUp 0.3s ease both;
                font-size: 15px;
                display: flex; align-items: center; gap: 12px;
            `;
            toast.innerHTML = `<i class="fas fa-check-circle" style="color:var(--accent);"></i> ${msg}`;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(20px)';
                setTimeout(() => toast.remove(), 400);
            }, 2200);
        }

        // ==========================
        //  BÚSQUEDA
        // ==========================
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.trim();
            render();
        });

        // ==========================
        //  FILTROS
        // ==========================
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                render();
            });
        });

        // ==========================
        //  VISTA GRID / LIST
        // ==========================
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            currentView = 'grid';
            render();
        });
        listViewBtn.addEventListener('click', () => {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            currentView = 'list';
            render();
        });

        // ==========================
        //  TEMA OSCURO
        // ==========================
        let darkMode = false;
        themeToggle.addEventListener('click', () => {
            darkMode = !darkMode;
            document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : '');
            themeToggle.innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        // ==========================
        //  INICIO
        // ==========================
        render();

        // Exponer funciones globalmente para los onclick
        window.abrir = abrir;
        window.cerrar = cerrar;
        window.descargar = descargar;
