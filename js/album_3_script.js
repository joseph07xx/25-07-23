(function crearParticulas() {
            const contenedor = document.getElementById('particulas');
            const cant = 20;
            for (let i = 0; i < cant; i++) {
                const p = document.createElement('div');
                p.classList.add('particula');
                const size = Math.random() * 50 + 15;
                p.style.width = size + 'px';
                p.style.height = size + 'px';
                p.style.left = Math.random() * 100 + '%';
                p.style.animationDuration = (Math.random() * 30 + 25) + 's';
                p.style.animationDelay = (Math.random() * 25) + 's';
                p.style.opacity = Math.random() * 0.15 + 0.03;
                contenedor.appendChild(p);
            }
        })();

       
        // ============================================================
        // 3. GALERÍA (recuerdos)
        // ============================================================
        const misRecuerdos = [
            { id: "1LW8XI2G6U-qxr0HFZtjaLaqffoCRu989", titulo: "Te quiero en mi ser" },
            { id: "1LYIIJuC116k3gYgY51u4k1aCLXLhEnO2", titulo: "Te quiero en mis venas" },
            { id: "1Ljczmk2XaJP9nHqaJZijX5bitapxo0eV", titulo: "Te quiero en mi risa" },
            { id: "1LwwcqqZIM3vY_khsOerUonBChNZUdGWF", titulo: "Te quiero en mi llanto" },
            { id: "1M1jt_KPtjHMq1skgeufKHMQBgzfaucvB", titulo: "Te quiero en mi silencio" },
            { id: "1M9Zz7Un88mALRaHVNt-5RYZLPzKGb1sx", titulo: "Te quiero en mi grito" },
            { id: "1MGys_2tasBeKBVkc1-j8AWZhncUCFW4n", titulo: "Te quiero en mi día" },
            { id: "1MNISGIkn1MurHacPIAGY3ewq4fY1yGKu", titulo: "Te quiero en mi noche" },
            { id: "1MgASpruV4pCXZekZwg2BZMlrVTT0Z_MV", titulo: "Te quiero en mi sueño" },
            { id: "1Mm7W3oX4ZCRFfoQHJmiIPYmdNUz3PKVU", titulo: "Te quiero en mi realidad" },
            { id: "1Mq4zY9U1a9JuGscZI8hSHV2b9lNmZ8c1", titulo: "Te quiero en mi vida" },
            { id: "1NQH5QGcZNnfCskmxIn-lxaysylBMy2_F", titulo: "Te quiero en mi muerte" },
            { id: "1O-sC-RQzY6BfE7ZREBJo31mK7cQ280bO", titulo: "Te quiero en mi eternidad" },
            { id: "1OXal-mfmFZ-8UVW_V2exLBW93yupxk5X", titulo: "Te quiero en mi infinito" },
            { id: "1P6KTASPiVUm6qGlIGwmtxPqw5OhdOHe3", titulo: "Te quiero en mi universo" },
            { id: "1PBamUhSLFIeQSbzSvmZwB2xFxYGJy8Aj", titulo: "Te quiero en mi mundo" },
            { id: "1POf0LGJfOBcq5p6krcs3A4sI8r_4RGiY", titulo: "Te quiero en mi corazón" },
            { id: "1Pdkaedjxwwf1TvPcAQqFOIfjN-kmdeLc", titulo: "Te quiero en mi alma" },
            { id: "1Q-O7v4X6IpwSDsoD7xpxtAGecedVJa-p", titulo: "Te quiero en mi mente" },
            { id: "1Q4hv3OPUKFul6oSI2XR24LkI4jyIv9oB", titulo: "Te quiero en mi piel" },
            { id: "1QMEbulDYntED6oM1Oc7OGXcSYRz5cOVf", titulo: "Te quiero en mis huesos" },
            { id: "1QVdAAqOQvvHpHUziWWiksPqrnjLvVDnw", titulo: "Te quiero en mi sangre" },
            { id: "1QwrP4Nauh5BuusXaiJ6yEJfpVvSq98Av", titulo: "Te quiero en mi ser" },
            { id: "1R17e86ZmaXp9OWHFo_cFG-PztdJ3rxfQ", titulo: "Te quiero en mis venas" },
            { id: "1RQE0cSXvGbHqn2lRaxbxIcaovI3EwFom", titulo: "Te quiero en mi risa" },
            { id: "1S5YzXKSv85Dc9jzeLUmMsiBTef915Ism", titulo: "Te quiero en mi llanto" },
            { id: "1S5lAIZsWkXq8f-yVAe6nUl5hgzIWP-nU", titulo: "Te quiero en mi silencio" },
            { id: "1SG8lfgsQCkwpiHUFXjq5F8lsa5cM8rnp", titulo: "Te quiero en mi grito" },
            { id: "1SSI6wdd0yMhKDeErIhLxhsqRPOUNN-vy", titulo: "Te quiero en mi día" },
            { id: "1ShzWy9SSw8JEcP3QGhGmcs3RvbjXrZrl", titulo: "Te quiero en mi noche" },
            { id: "1SukI6U8VeOp0QM5ztsk0csGZDOi2huR3", titulo: "Te quiero en mi sueño" },
            { id: "1TBwVuJ3WXpSQo46QWiQQStYQaZHULfgn", titulo: "Te quiero en mi realidad" },
            { id: "1TSLNCfvTE0iaNzw9vpXTSJZ_1tXIKQTV", titulo: "Te quiero en mi vida" },
            { id: "1Ti6FDbbq97EgY13dyM2TnImrfGuNEvcZ", titulo: "Te quiero en mi muerte" },
            { id: "1U7hRV2QwmR8nz27RaDhsa3qBAIz9uThw", titulo: "Te quiero en mi eternidad" },
            { id: "1UheF9j1S837rufh1PPuvlypTWq7xz9bH", titulo: "Te quiero en mi infinito" },
            { id: "1Ul1zTM6QspN5FyEjTeNIZh_bS3QTBCGm", titulo: "Te quiero en mi universo" },
            { id: "1UvEj5Yn5h21wOjMnvsmsB35vr11Q_wAG", titulo: "Te quiero en mi mundo" },
            { id: "1V80WmhzYZiAttnhj2GfzZOIKZklho0oM", titulo: "Te quiero en mi corazón" },
            { id: "1W6ajpYf1q4nYUJbWhsinX2rTux9z13dN", titulo: "Te quiero en mi alma" },
            { id: "1Wz2E-n9ztAWQSzIDyWSZLuZfAiuxVsQ1", titulo: "Te quiero en mi mente" },
            { id: "1Xe8qd7NvgB5NPZtKYfHQCqD8iYrkbb76", titulo: "Te quiero en mi piel" },
            { id: "1YRaKlj8zYSm-8WfQhmAGrrGy_Y2BKnlp", titulo: "Te quiero en mis huesos" },
            { id: "1Ya8mXchwbXJf8UmT15jy8OznO608bqvL", titulo: "Te quiero en mi sangre" },
            { id: "1YjEBY4qDCkHk89Nl8BLaib0XoqgUy9Ff", titulo: "Te quiero en mi ser" },
            { id: "1YnU_1xYruzJHMo_6w37X175jpZTRi6GX", titulo: "Te quiero en mis venas" },
            { id: "1Z1Z5fdRb3lZndpjx5UB_AgCILw3zWX-8", titulo: "Te quiero en mi risa" },
            { id: "1a1XewS1Hf7FFQEWIYtYb5komrDO_jdUq", titulo: "Te quiero en mi llanto" },
            { id: "1b-9Ad4x3VbsDSHAg9oIrn0g_rWdvCkqk", titulo: "Te quiero en mi silencio" },
            { id: "1buhZuEvkIX1CEK2U9uM1f7qUrjIxbTnZ", titulo: "Te quiero en mi grito" },
            { id: "1bvKKL3l8nXPPAS6BwrF2MWHwyg731RcH", titulo: "Te quiero en mi día" },
            { id: "1cHt83AXMi7ZziIVuaoJnoL0FJQJyiMWD", titulo: "Te quiero en mi noche" },
            { id: "1cQclCdb7QQaqWFip9eUFCf_GtsBTlgeF", titulo: "Te quiero en mi sueño" },
            { id: "1caDuoZgAY1gMsGLYKey2K_Y6TVCi2LID", titulo: "Te quiero en mi realidad" },
            { id: "1d7d9LEsI4kCVZWqXiBizanji33czQXSk", titulo: "Te quiero en mi vida" },
            { id: "1dJngYBeflL8gUCMgI6CWqGni7HZ0FrMa", titulo: "Te quiero en mi muerte" },
            { id: "1dNrz9DMFtyF50CjJ2-fCnQJ3bpJx-ia5", titulo: "Te quiero en mi eternidad" },
            { id: "1dScd2tEXA47A1HIDjhMixm5mStiPAEfS", titulo: "Te quiero en mi infinito" },
            { id: "1eB96blL_nCUVJJ_b0Lwp99ESTdvxAXZE", titulo: "Te quiero en mi universo" },
            { id: "1eMWgWH8I9b2QwB5fam3EJ50lNi_uMpHi", titulo: "Te quiero en mi mundo" },
            { id: "1edRl1E2AEXHRMLtLSTtjzVATlES3xHPC", titulo: "Te quiero en mi corazón" },
            { id: "1ekngOB5ZmSvhuOb4M_u4lm07QdVMRcKL", titulo: "Te quiero en mi alma" },
            { id: "1euDbqalvWeAbgKTStTzIkHZu6r4AdWna", titulo: "Te quiero en mi mente" },
            { id: "1f-IXWtKUQdK2Xz3KQcgm96QjcVi8FhGN", titulo: "Te quiero en mi piel" },
            { id: "1fwLi05E-5O6drbiLBoVX3rs2Bbkx19hS", titulo: "Te quiero en mis huesos" },
            { id: "1fywo7rx3Td8u616ACP1rJWDrBmXxtgOM", titulo: "Te quiero en mi sangre" },
            { id: "1ggC9FVPE9XDPa7ldHdZtho6cUniZvegx", titulo: "Te quiero en mi ser" },
            { id: "1gjdVuCfUl_Pj0MuMs3Y24KFuMmUXNNZA", titulo: "Te quiero en mis venas" },
            { id: "1hb2depAJDa7dP1X1L-UQphDfqFuQIsar", titulo: "Te quiero en mi risa" },
            { id: "1hhqbkuiHiiv7dwNA0zNg4tQcu9Ub-dwk", titulo: "Te quiero en mi llanto" },
            { id: "1hrGvWIv07vy-iBxfNbgHXMYNbLcx449a", titulo: "Te quiero en mi silencio" },
            { id: "1iKST-PaQSkwwHcKbEL-cy_JgI98Xz44S", titulo: "Te quiero en mi grito" },
            { id: "1ieIDX929xt0V3XeQXXIV0kJxqF78HL8e", titulo: "Te quiero en mi día" },
            { id: "1iigFyHQ9HBAxKR83rBrfVsdyhKn8knl1", titulo: "Te quiero en mi noche" },
            { id: "1j4aivVQL-LToDOFUXYtnQ9_zSxqEJrjc", titulo: "Te quiero en mi sueño" },
            { id: "1jSb2OYpYc9BSCCPOEAypY5hpEnAS3uFE", titulo: "Te quiero en mi realidad" },
            { id: "1jwbtKNhKN7NIqDzS6Tlv0j2QkrQr6BK4", titulo: "Te quiero en mi vida" },
            { id: "1k6lOxIIeNGf8Abii8Z6QholWXIIcPXPz", titulo: "Te quiero en mi muerte" },
            { id: "1kAfr2GMNxMQ-m6s8E_REmWP044-4nT2-", titulo: "Te quiero en mi eternidad" },
            { id: "1kOEBCCYmHXDp9HdrRe39MkNMh1qXtiLv", titulo: "Te quiero en mi infinito" },
            { id: "1kW5I9PJTS2JSOGlGQiqOJkDsIV76fdhd", titulo: "Te quiero en mi universo" },
            { id: "1kXQvCz0VtJmXiUU5WRSCk-KGVJ9JCXRh", titulo: "Te quiero en mi mundo" },
            { id: "1kjq1peU_6u0Foi-1f8KGdme_pGrFOhXV", titulo: "Te quiero en mi corazón" },
            { id: "1kllcnW8lHPvNxdhlbk-1RKoWl3PlyBlP", titulo: "Te quiero en mi alma" },
            { id: "1l4mSHYuLXwqZEpRZmQPZQA0jOqJNlXoG", titulo: "Te quiero en mi mente" },
            { id: "1l511eWzr4ih9HCn3BL4NCvA0CHrXE2ss", titulo: "Te quiero en mi piel" },
            { id: "1lGqhRb_3TzJEP99W9ptLCtGL08dzjNNh", titulo: "Te quiero en mis huesos" },
            { id: "1lPjdxcdhRYNJ98qx8R_Cx8XiPpQHrIKv", titulo: "Te quiero en mi sangre" },
            { id: "1lhwuyyRxBxkXQC9A-MFyLG90nhrUPazG", titulo: "Te quiero en mi ser" },
            { id: "1mFWMLkookfGRRnlSwCBHvtKS-Ch0VqTc", titulo: "Te quiero en mis venas" },
            { id: "1mUwkDW0k_fRTDO4l03HhDKjtSK0OiUd2", titulo: "Te quiero en mi risa" },
            { id: "1nBn1xM__VqIo7ybRphwkMFjh4hJ_7fPK", titulo: "Te quiero en mi llanto" },
            { id: "1oWvneQx6hcZoazvO5sBPSc2aNRGhfYNT", titulo: "Te quiero en mi silencio" },
            { id: "1okiti97X0AHeYGVPUuAHKLU5uzlcNq9q", titulo: "Te quiero en mi grito" },
            { id: "1pEU72b3R-8E7a9jN-JgaoJfMyeL67MgD", titulo: "Te quiero en mi día" },
            { id: "1pTpdg1ZhtJ9WvximDvjtB_1wFDWaYRoI", titulo: "Te quiero en mi noche" },
            { id: "1pndzF4Uik20cmgYik-ojE5UsXLlX3bbT", titulo: "Te quiero en mi sueño" },
            { id: "1qBIYiGKEC7_zBfocpLxZHGSd22Yh5Zar", titulo: "Te quiero en mi realidad" },
            { id: "1r1MMilISX9XNTZV7C_AXOptmmkkeo9oQ", titulo: "Te quiero en mi vida" },
            { id: "1rymXEq8nWdTYSRKgcLDpQLxUSLRK2qZi", titulo: "Te quiero en mi muerte" },
            { id: "1s4tZ3TOcEQmuiQzWNWpi1dSF9GbG3qOK", titulo: "Te quiero en mi eternidad" },
            { id: "1sHAsGq7vMR4G8Tx3RGl2Ax56FCVMPWPx", titulo: "Te quiero en mi infinito" },
            { id: "1sKkwCzw7tk32mrVtOXyqJVQyztRHslgn", titulo: "Te quiero en mi universo" },
            { id: "1subNnlz7-Sln1ZK-9bFetGeHpgdb4Dkf", titulo: "Te quiero en mi mundo" },
            { id: "1t22PLizFThSWqmPi_nxTYV4JxE0SyTCY", titulo: "Te quiero en mi corazón" },
            { id: "1tQgy4CzRSRMhsZDE3YRuQUjXnXm2abqT", titulo: "Te quiero en mi alma" },
            { id: "1u9R0VJHuetiZ5tox1vWUQWZK3WntvxoA", titulo: "Te quiero en mi mente" },
            { id: "1uANbr19EIWbOYZ4d34UmLmOVANtMoeDb", titulo: "Te quiero en mi piel" },
            { id: "1upZeiWfNe1CyxRkLlTvs02rUNxEWzODq", titulo: "Te quiero en mis huesos" },
            { id: "1usOF62oXCE_oPGhI0bJqrmzyizPF_8Kn", titulo: "Te quiero en mi sangre" },
            
        ];

       const contenedorGaleria = document.getElementById('galeriaGrid');

        misRecuerdos.forEach((recuerdo, index) => {
            const num = index + 1;
            const url = `https://lh3.googleusercontent.com/d/${recuerdo.id}=w1000`;
            const titulo = recuerdo.titulo || 'Momento especial';
            const fecha = recuerdo.fecha || '✨';

            // ... dentro del bucle forEach:
const cardHTML = `
    <div class="card">
        <div class="image-container">
            <img class="drive-image" src="${url}" alt="${titulo}" loading="lazy" />
        </div>
        <div class="card-content">
            <h3 class="card-title">${titulo}</h3>
            <span class="card-date-badge">${fecha}</span>
            <!-- CAMBIO: Botón sin href, usa un evento onclick -->
            <button class="btn-ver" onclick="document.getElementById('img-${num}').style.display = 'flex'">Ver recuerdo ✦</button>
        </div>
    </div>

    <!-- CAMBIO: ID se mantiene, pero ya no necesitamos que sea un "target" -->
    <div id="img-${num}" class="lightbox" onclick="this.style.display = 'none'">
        <div class="lightbox-inner" onclick="event.stopPropagation()">
            <button class="close-btn" onclick="document.getElementById('img-${num}').style.display = 'none'" aria-label="Cerrar">×</button>
            <img class="lightbox-content" src="${url}" alt="${titulo}" loading="lazy" />
            <p class="lightbox-caption">${titulo} — ${fecha}</p>
        </div>
    </div>
`;
contenedorGaleria.innerHTML += cardHTML;

        });

        // ============================================================
        // 4. FRASES ROTATORIAS
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
        // 5. CIERRE DE LIGHTBOX CON ESC
        // ============================================================
        // Reemplaza tu sección 5 (Cierre con ESC) por esta:
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const abiertos = document.querySelectorAll('.lightbox[style*="display: flex"]');
        abiertos.forEach(l => l.style.display = 'none');
    }
});
