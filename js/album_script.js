const misRecuerdos = [
            { id: "1pm2svUFVCKT20qZb9E367L_oBgRJZFx-", titulo: "Nuestro comienzo", fecha: "2023" },
            { id: "1ImtKk7UWGNKHqpLvwVlCd5NrW99pgFuj", titulo: "Mirada que enamora", fecha: "Agosto 2023" },
            { id: "1_hqX3nT0VXInR_Z38Y4ZxDRYZWnS0uJL", titulo: "Atardecer juntos", fecha: "Septiembre 2023" },
            { id: "1WN4bmVzBAEt43aTIfbwcNDsclg2k7BQc", titulo: "Sonrisas sinceras", fecha: "Octubre 2024" },
            { id: "1WpM2hkBNdFI8flsxYKIQsdUu1chldtx-", titulo: "Día perfecto", fecha: "Marzo 2024" },
            { id: "1-h7ptg3yhupm7dLHLK9gH5LrBBTPXWp7", titulo: "Abrazo eterno", fecha: "Febrero 2024" },
            { id: "1y783ZM6d33rc9igv2be9m0XrKYtVxbUc", titulo: "Noche mágica", fecha: " 2024" },
            { id: "1hIsX0LY2SP3QhoxG2fRM0f6sCy6UVAHj", titulo: "Complicidad", fecha: "Septiembre 2023" },
            { id: "1FjWFkhHRK7_mF4zUXPp7oZRUAQdxl1GT", titulo: "Destino", fecha: "Marzo 2024" },
            { id: "1Uw1HEWmzd135g4ysusOsi7JLywbLvkHL", titulo: "Refugio", fecha: "Octubre 2023" },
            { id: "1RXWuiyqGiOGqsxS5yBdQiOIJeMZ4qCFO", titulo: "Instante único", fecha: "2023" },
            { id: "1LoqaGb3mk8SsdLgkS6KsIQR190QQbmC0", titulo: "Ternura pura", fecha: "2023" },
            { id: "17EcqwTl7ZgE142WlcI2bSmDBQntQTH5E", titulo: "Risas", fecha: "2023" },
            { id: "12cFguQajr9ykc5qy0QrmU4Cwq09jqYMf", titulo: "Luz en tus ojos", fecha: "2023" },
            { id: "10mM0Lyu8vqGp33kIiXKGsGzcO0bAvxJV", titulo: "Sueños compartidos", fecha: "2023" },
            { id: "1kZ9f5t4D1Z9k2-NJdHM89DwWg-GXQWbQ", titulo: "Juntos", fecha: "2023" },
            { id: "1-xA0VinFW8UhhQoZWorheYQaOnsk-1EU", titulo: "Amor verdadero", fecha: "2024" },
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
            { id: "1wr43q4qxY5INtBVfxPX1vU-18kml6QzZ", titulo: "Eternidad", fecha: "2024" }
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
