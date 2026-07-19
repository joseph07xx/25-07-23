// ============================================================
        // 1. PARTÍCULAS
        // ============================================================
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
        // 2. CONTADOR
        // ============================================================
        
        // ============================================================
        // 3. GALERÍA (recuerdos)
        // ============================================================
        const misRecuerdos = [
            // (Array completo de objetos con id y titulo, tal como estaba en el original)
            { id: "1-dmzaV4RWFEVlTxGzf8BdnJ8cTyYKXVh", titulo: "El boulevard de los sueños" },
            { id: "1-jSPtMI4-zvEe7C6Mefb4fae3OzYLhJT", titulo: "Luke y Hasley, el comienzo" },
            { id: "103CwZj4kYNmGzogDBBt8U7_Qrmnj5lqT", titulo: "Promesas bajo las estrellas" },
            { id: "109BKAeFsoYcLzJ9RjDzBp3FLdagCxR3l", titulo: "Miradas que enamoran" },
            { id: "10T5ZeXA7FqkgtTELKbynCTFNurVg9olW", titulo: "El beso en el boulevard" },
            { id: "11WFmA9NX0lumujWcvuxjm8i-HYwYpJWi", titulo: "Caminar juntos" },
            { id: "12PudkR5t_W9Qd9DV2i9OVoMztKhTAl2J", titulo: "Hasley, mi refugio" },
            { id: "13RkATR7c6wgDr6IiBHmqT2t_fl_Y1sPv", titulo: "Luke, mi tormenta" },
            { id: "14-rrhwBDVwD_rIBTYke1_JefP9VSeQgv", titulo: "El reencuentro" },
            { id: "15OLhdtnxICutz1E6FHYR2IWdGlkfvv48", titulo: "Segundas oportunidades" },
            { id: "163B0smySxdlciOwSr88PYTxre5OGI0XQ", titulo: "Decisiones del corazón" },
            { id: "16jRE3jldU54nWwaMg8CR3-df-GgjFtf8", titulo: "El boulevard nos espera" },
            { id: "1719jzDhAISIwuDKzy8S-y3ZpCn0wxYgF", titulo: "Amor a distancia" },
            { id: "17SNdGrZukbCVI0ZA_AAR140n5OtrA1hT", titulo: "Cicatrices del pasado" },
            { id: "17XwSfJd2WblV-RGgI736LC-L-hk6LIGK", titulo: "El boulevard de medianoche" },
            { id: "17lrwI_TeNsB62C_EKs0-cV34EIB2sMnT", titulo: "Amanecer en el boulevard" },
            { id: "19BDvBcB4ZfVe12VHMuz-PyUizzdoOtt9", titulo: "Suspiros de verano" },
            { id: "19ps-df4Mmx7MDnjG6ZK8u1dilqyAFcMN", titulo: "El último paseo" },
            { id: "1D1ARI6MSd7x3YllBwE-xD1tqFroSAGSG", titulo: "Eternidad" },
            { id: "1DTXNcYJUXxalXFZ_NhqxfIMo0TtKBTsf", titulo: "Siempre juntos" },
            { id: "1E78G7zVFpYkWX27AfGA9S6WXWVJASeEV", titulo: "Cumplir promesas" },
            { id: "1EIVjABu2DxZAs8Wm-2d7gfFVSuhclWj7", titulo: "El boulevard de nuestra vida" },
            { id: "1EjlKqZ0JB8vF9AJ0EjUxI0FY8FiNvCn_", titulo: "Luke y Hasley, para siempre" },
            { id: "1F0p2Rz1yVuIYjSp9Dc7dHEHtjLk-G7CE", titulo: "El legado del amor" },
            { id: "1F9tQ3GVqVNgmjxI_VGw9OFb6TCid7YDk", titulo: "Boulevard infinito" },
            { id: "1FAdbeBdHH63V9TY0UO9N-l-oqhkApnc9", titulo: "El primer te quiero" },
            { id: "1FFuQQoIlGniZFJqsj6gBRv3fZBXt6aRL", titulo: "El boulevard de los recuerdos" },
            { id: "1GCXpoM3ykXow-OWA2XW-H6nlERJ2hJ52", titulo: "Hasley, mi alma" },
            { id: "1Goupphzv0ol-Zq5owyYX_YNXpgZxVTo3", titulo: "Luke, mi corazón" },
            { id: "1HRtE9fg5zt-6-eLX4kVVBzw1_2NPNxVm", titulo: "El boulevard del adiós" },
            { id: "1HY34hMx2bUjZkSPQo0RB763Z4Q0DS3xW", titulo: "Boulevard: el regreso" },
            { id: "1INZ7ezRGOrmvnKCtF5Rf_FpByWyknMm1", titulo: "Boulevard: el final" },
            { id: "1J_usQhjGC1BVOMpdx1bHB2LjjmrMdlui", titulo: "Boulevard: el inicio" },
            { id: "1JgZjr0IfNGZ6FpTQ1P0L28lQD01R9nT-", titulo: "Boulevard de la felicidad" },
            { id: "1MN50TC2uPzjENIN-E_KKKTPvQOVETQjj", titulo: "Boulevard de la pasión" },
            { id: "1Mo0rga59jeyMI4mHFBsQbv6vA7Ionhww", titulo: "Noches de boulevard" },
            { id: "1Ngj550Ef25WCAbrkVIEqMRmnHq-RPL31", titulo: "El boulevard de los enamorados" },
            { id: "1NhDdMG7fV-kBYgU_x4adAaeTLXxHD5Eb", titulo: "Luke y Hasley, el destino" },
            { id: "1NhHMxYZBfSDiELUKNo8yA3zB0PASDL7z", titulo: "El boulevard de la esperanza" },
            { id: "1OT1hjhTo6ZyvwpUDO63z-SRD8YTh8vEl", titulo: "Boulevard eterno" },
            { id: "1OYr1MakOUcDufYF5HTmntomgoT4KB9rF", titulo: "El beso robado en el boulevard" },
            { id: "1PoGD4V012s_iUSAzK4b44XjVZNs2RwEB", titulo: "Caminos de boulevard" },
            { id: "1Q65ktUqQV1YRCNPSm7bAMETp0b9hhnCP", titulo: "Hasley, mi razón" },
            { id: "1Q9WSrFiufAA6fSXYkvZWJehia0WHo_k1", titulo: "Luke, mi destino" },
            { id: "1QHNt3UwQweKdBZI-dyYtVezN2ySXewEO", titulo: "El boulevard de los sueños" },
            { id: "1QathhzGSp7BUSwYaYqFAjYBQXGLzsbjn", titulo: "Luke y Hasley, el comienzo" },
            { id: "1RQPK_Jn4grr2u4LzvLeZdrdxTbWkM38L", titulo: "Promesas bajo las estrellas" },
            { id: "1RoO2pCwoN9VOQq157etyHojYTedVD3KI", titulo: "Miradas que enamoran" },
            { id: "1Sc4c7GnCZIfxs7GO7MqWWmN4Zi-Y3KhM", titulo: "El beso en el boulevard" },
            { id: "1Sl3szwwV53zW82D8DzwK0ZCBb9E2zP5w", titulo: "Caminar juntos" },
            { id: "1TCeJp-24TTrqzpa1Lh8sqxGquqhZjJtQ", titulo: "Hasley, mi refugio" },
            { id: "1VCPuEIHeaZKE5Ccg3v9IaLnZlq-VEYEe", titulo: "Luke, mi tormenta" },
            { id: "1Vc0kqKrh7T0V6ObwOnnRR5q3RZxnWVtV", titulo: "El reencuentro" },
            { id: "1XVvzlCdxvRuqnhnoRGLqaZwknBkmSEA2", titulo: "Segundas oportunidades" },
            { id: "1YmmOf0Ft13CPwYlbad6JJD-W2gWJVdmH", titulo: "Decisiones del corazón" },
            { id: "1Yn3UCDowlOc5E4d9e1O0Ucjzp6pV7f4E", titulo: "El boulevard nos espera" },
            { id: "1ZaOe90WsMyNuGVKHfIWI_2HtP6YvhDQY", titulo: "Amor a distancia" },
            { id: "1_3r8eBXcAQNROfZHv6lOSaYVw8eh1h8F", titulo: "Cicatrices del pasado" },
            { id: "1aLIFovHf9fcvZl4uiBEQeqIpWnua0m6H", titulo: "El boulevard de medianoche" },
            { id: "1aWOoScytLGig9W8RZ-czJRcm5DMlcypZ", titulo: "Amanecer en el boulevard" },
            { id: "1bHdwAxsrXxGC9PzNncs-W-fJR6DpgNi2", titulo: "Suspiros de verano" },
            { id: "1c4koIpvxDCciuD_xRRTz0aM1urwypVH_", titulo: "El último paseo" },
            { id: "1d3fYjPlRDZRCYvNE04p4j-dOn_3WigWK", titulo: "Eternidad" },
            { id: "1dBOhCw7lTKGGOY6NvwzTD_gD9VsJg9iC", titulo: "Siempre juntos" },
            { id: "1dF1tAkZq6PE_dPTyK3HZTxo_zdyhsTu8", titulo: "Cumplir promesas" },
            { id: "1dwFHZKIJgQoCHlCvUYampOx2qJm-SXEA", titulo: "El boulevard de nuestra vida" },
            { id: "1eJBLyojf_Xz-pMGcIB0O_QHmTu5dwmkT", titulo: "Luke y Hasley, para siempre" },
            { id: "1eacjUC7OqqsWg2pUHo8yAro7F5OPCVay", titulo: "El legado del amor" },
            { id: "1eoCMfT14tMTYezK_V0u7DpRZGJvk2CNZ", titulo: "Boulevard infinito" },
            { id: "1gDfTCNEZcb8LxBHfuRt-n_mf1rYd83ud", titulo: "El primer te quiero" },
            { id: "1ghXFqvO3X0whvI7XtjnlJst4ZSAPxa5L", titulo: "El boulevard de los recuerdos" },
            { id: "1h28TGE56FgICGdFJUvyTPqC2djoQl3Fi", titulo: "Hasley, mi alma" },
            { id: "1hKdi0rV5OilLgImKp8cZU2yyiXgYEvio", titulo: "Luke, mi corazón" },
            { id: "1hRYB-Om0_Kxo3mlN_oH5aZ0UYma4gEDY", titulo: "El boulevard del adiós" },
            { id: "1homkLfQxnT4sHZ0CvJHJnT1cIGIr94ZM", titulo: "Boulevard: el regreso" },
            { id: "1hvkYTKjY7yvNcQOypXg9uNxUkzF8FWdh", titulo: "Boulevard: el final" },
            { id: "1j3XPmMbtMkCQC16uid7nuVBik_oYo3Dh", titulo: "Boulevard: el inicio" },
            { id: "1jmeRc-_Jt-EDRP3BXTSBJSY6r1l2YWvJ", titulo: "Boulevard de la felicidad" },
            { id: "1jwODZWKKRHJtmk7WsFkKn__mjRjnjy5q", titulo: "Boulevard de la pasión" },
            { id: "1lEApmcWPCRLh9W2OFH5MQpA71gTfAScz", titulo: "Noches de boulevard" },
            { id: "1l_nIygq9wA5DOINiO9o82HMPJVon2D8Y", titulo: "El boulevard de los enamorados" },
            { id: "1lzgYvKf1ludnNOeaYhO71S-AZ9lsOcHT", titulo: "Luke y Hasley, el destino" },
            { id: "1mP_dBRrOHzlkHuGilo46_kYH1HzUK_SB", titulo: "El boulevard de la esperanza" },
            { id: "1n0RAUYQnBhEayApcEj_lsdF_Mv0pDXZw", titulo: "Boulevard eterno" },
            { id: "1nULTDbuNZWRAyLR7HNwC_73kIksaS3Bo", titulo: "El beso robado en el boulevard" },
            { id: "1niNWVuCR4NiR6_yPOwNc3h_I0zrmq2Rz", titulo: "Caminos de boulevard" },
            { id: "1oAkqtYTVyZR02f8alMWTZxErEL8cfxCM", titulo: "Hasley, mi razón" },
            { id: "1oQuPujrKwNBm4cNVLu3HpAbE17dbl8SL", titulo: "Luke, mi destino" },
            { id: "1ogHq_wsyYXAHxBPQWfZDcyDnLlyRVxRg", titulo: "El boulevard de los sueños" },
            { id: "1prfOVtr09hgbBffh2HkaMplu5W8kCT8j", titulo: "Luke y Hasley, el comienzo" },
            { id: "1rIXCrWrpX_G_tpR8rHTkNZsueM3_9LP9", titulo: "Promesas bajo las estrellas" },
            { id: "1rm572JhmGncwoiL1Wbpu76iGXLN8Tkg-", titulo: "Miradas que enamoran" },
            { id: "1rnIrgALzz1GmvMlms6bsnaa7dp5dpsf9", titulo: "El beso en el boulevard" },
            { id: "1s2HTh9Ccle8Lh4AtiqT34I7q1dpBNhoZ", titulo: "Caminar juntos" },
            { id: "1uITWfZQrvVdPtCphxFsObNsT5bkHG9kZ", titulo: "Hasley, mi refugio" },
            { id: "1uaZyZxAAi3eHG3cv7DcqIXbnB2pTm0SG", titulo: "Luke, mi tormenta" },
            { id: "1va5UyZIWVFkskwBo2TgHp9MpbDpBhhka", titulo: "El reencuentro" },
            { id: "1ydl0BaHxksslVklRWVsrkaF9SsjBRFvi", titulo: "Segundas oportunidades" },
            { id: "1zDJ-GIuzBfGfKp3sEj9KvwbCOYCRcfKD", titulo: "Decisiones del corazón" },
            { id: "1zJNw_riQUvlIlp09TP8qPYQWkEw4Vu5I", titulo: "El boulevard nos espera" },
            { id: "1-c7VOXsjjsGJnCMmqlUngWIJS74yd92f", titulo: "Amor a distancia" },
            { id: "1-il2S_QtEcwaNfb9Qh1p3P8Tjh2Zm1u2", titulo: "Cicatrices del pasado" },
            { id: "10l9o_eQtxxV4Yfr4lgPDga78cVGMo0wb", titulo: "El boulevard de medianoche" },
            { id: "10yWaYgbgiYcQUeVm1vjB20UJJzoJ6V7b", titulo: "Amanecer en el boulevard" },
            { id: "119iCy-_3nHqfQAdiT6jyYObCp_AkJ9Q9", titulo: "Suspiros de verano" },
            { id: "11ATzWia61a_YGh9orubErgbTuQIXBVyT", titulo: "El último paseo" },
            { id: "11HfChDcqYNR9uXR_WV0vfKzG3CyJDis5", titulo: "Eternidad" },
            { id: "11gX7WKxP5fl1rWOQqOMOQ-LE63K2zdZ4", titulo: "Siempre juntos" },
            { id: "12RoinZXZ08kmT5qN8VzCuEcHhRHkceCm", titulo: "Cumplir promesas" },
            { id: "12VjusNpC82W5S40fp6kT2YXlhvoH2Pso", titulo: "El boulevard de nuestra vida" },
            { id: "12wT--PmXeatjInPlVHCCkwnJj7QrUzjR", titulo: "Luke y Hasley, para siempre" },
            { id: "13P5G0QXwsH3osx4Pb8d7Jhnw-34_9jYT", titulo: "El legado del amor" },
            { id: "13bwAxCQZl4S6MW2zhzj0yrBxVJDn2zfn", titulo: "Boulevard infinito" },
            { id: "14JPoUN5HX6WwvWsWpJO94je93MTpdDtK", titulo: "El primer te quiero" },
            { id: "14JrM-NGajaoO2My8bZVWjMCQId3gLkTb", titulo: "El boulevard de los recuerdos" },
            { id: "14VtKkS1SGQs3SaUkfTzjm4gBgGBacHPg", titulo: "Hasley, mi alma" },
            { id: "15K7yphMCK1DVixP2_wiI_U59TqUOxW2U", titulo: "Luke, mi corazón" },
            { id: "15oyi49y17hxG5n73ueDNxuMtQpFyjUfo", titulo: "El boulevard del adiós" },
            { id: "15saWL5cQs14spVedAePED9Zzr5zKAmpV", titulo: "Boulevard: el regreso" },
            { id: "15uKSweNhrEx8tAQMWlnF10b68q50sXk3", titulo: "Boulevard: el final" },
            { id: "16XQb-6Vekf3zIkVy1nNDRkJ-n6jxCnH6", titulo: "Boulevard: el inicio" },
            { id: "16ydMOsaUFEyL-ylS7Wan5pkKyxm2Vdbw", titulo: "Boulevard de la felicidad" },
            { id: "179fpYA0s2uwPDNmpwANh96tDRywLahju", titulo: "Boulevard de la pasión" },
            { id: "17Fz1OFfIF2CAt7fIdH_Mc6AQRx1h93NJ", titulo: "Noches de boulevard" },
            { id: "17O8pE2HJHIUTMr_LOeOzfcsQPwn8JcTY", titulo: "El boulevard de los enamorados" },
            { id: "188nJGOk8hUP1iLP3LmKNl_xWCdm7yugB", titulo: "Luke y Hasley, el destino" },
            { id: "18z1bACsr736G5XPuELi1wpWA6aah_5Lt", titulo: "El boulevard de la esperanza" },
            { id: "1969h7Ojth3at98ZKKLHYuBmWm1AcreOA", titulo: "Boulevard eterno" },
            { id: "19B3n6z0J3Y82OYIRDdBgVG8AVZql-5Uj", titulo: "El beso robado en el boulevard" },
            { id: "19RxBFdJWJJANQuLWb6P67VuYqNcIIpk3", titulo: "Caminos de boulevard" },
            { id: "19RyG86pEXtxNN9oRbgM4v_W1FIvkPK-n", titulo: "Hasley, mi razón" },
            { id: "1A5-yQAHgmhC0GLv3lcM4oKOopLTx-8ow", titulo: "Luke, mi destino" },
            { id: "1A7Xr-XgJmHVkvble14OspRmjppPgwe1G", titulo: "El boulevard de los sueños" },
            { id: "1A9X9qpkdBctsOA1taOc3mDfWZhnFLu95", titulo: "Luke y Hasley, el comienzo" },
            { id: "1Amhjp6c6jjT_Buz10GVLHtVoSu7lomEu", titulo: "Promesas bajo las estrellas" },
            { id: "1B0EOgrgTbhRCD7YqtGDKH0lnXnnzsdj_", titulo: "Miradas que enamoran" },
            { id: "1BFVXwUcH-xCkLgIIiVFloue06yI3cCom", titulo: "El beso en el boulevard" },
            { id: "1BdhH8kv-unBG9DqlGJvfwwnnQ-9SvBqS", titulo: "Caminar juntos" },
            { id: "1Bef-gaHcEIKcoX3S0So-5I1fy2I6CGxS", titulo: "Hasley, mi refugio" },
            { id: "1BiQspIOugyYcb5GUVtCrdE_C3jyTAFXx", titulo: "Luke, mi tormenta" },
            { id: "1BlNpjK6ISk6gv3Tz91Yim_T2wCdO1UqN", titulo: "El reencuentro" },
            { id: "1CHssykCE_M2rbKsiSsrFaelVVZfDiSOM", titulo: "Segundas oportunidades" },
            { id: "1CKuM1Dqs31qUAj9JAtKOLV1HoXgs1FV3", titulo: "Decisiones del corazón" },
            { id: "1Ccf7KMkD14sbtQLLsnIFdCUMDV2E_i8y", titulo: "El boulevard nos espera" },
            { id: "1Cn9hWA1cj3iCPwoo1aQZFhyj3HnQrNub", titulo: "Amor a distancia" },
            { id: "1CvFjaMulzUIdvt9hhmdvM1wCZS4xGFpl", titulo: "Cicatrices del pasado" },
            { id: "1DIql0Cz5SRPT2D2GtWygvYr1PAeXd1BC", titulo: "El boulevard de medianoche" },
            { id: "1DV6SW4goEDBBTjvq8sU-at3eo9uC-tg1", titulo: "Amanecer en el boulevard" },
            { id: "1DlF5ZGXoMtFU1zXxKEbhvsZXzl3JL47F", titulo: "Suspiros de verano" },
            { id: "1DmrAgvveuEhXOsGBj2MBfqpkXYTVjQMX", titulo: "El último paseo" },
            { id: "1E4895JT53KjH9rMUVetcxNnhzk2M8KDk", titulo: "Eternidad" },
            { id: "1E7WOFFkORN0ABltMyPUPSdc-2YoASh3d", titulo: "Siempre juntos" },
            { id: "1ED6Sea3GVTPSyHbo4lrkifaC3Aw-jZsS", titulo: "Cumplir promesas" },
            { id: "1EJlGdY1DIHBYCB_SM70iY5WXMbQMgLwh", titulo: "El boulevard de nuestra vida" },
            { id: "1EKqyU80KgXsd4lPKwN0o5QO-zMYyW2tG", titulo: "Luke y Hasley, para siempre" },
            { id: "1F9iWhAzlMLnyZQWjfO1EVT6y5YPsWGPo", titulo: "El legado del amor" },
            { id: "1FcbMGzHq1KslKm_vlmdpVGHw6XVwb808", titulo: "Boulevard infinito" },
            { id: "1G5NPV4ol1yD6CpeJ5bbxGZRICaUYnl6w", titulo: "El primer te quiero" },
            { id: "1GB1p7fVIdk3Znm3AZKfQ7eddbhZ1oBqK", titulo: "El boulevard de los recuerdos" },
            { id: "1GWbKJBzqTINqh7NBfKLceGyr_1ejABMD", titulo: "Hasley, mi alma" },
            { id: "1GtDGUJUSaWsbC8osTk33cTzdSged3kJY", titulo: "Luke, mi corazón" },
            { id: "1H3mtiC4UOH83ASCNGNI8q20sPLT0zj5z", titulo: "El boulevard del adiós" },
            { id: "1HZsNHQ8p7RGmNWbSiAbiYR4A4h488097", titulo: "Boulevard: el regreso" },
            { id: "1Hfb6zU7N-qzsbYW8-imWgyOUMttDjuB3", titulo: "Boulevard: el final" },
            { id: "1I3gfynEVbeMYPjYMW1_EW9Upn8ECpvdj", titulo: "Boulevard: el inicio" },
            { id: "1I7mBzg5JJ1-YNjGbzyk5l_eQqXG9xm0t", titulo: "Boulevard de la felicidad" },
            { id: "1IJ01LUaYsGFxMB-ATMQb6_S0ueyKDmVy", titulo: "Boulevard de la pasión" },
            { id: "1IPPErBYQcPHWYXgt6kyA8lvlEReOMgBS", titulo: "Noches de boulevard" },
            { id: "1Ik4Yp17wkMsUTsliltTVbqpuJJuTXME2", titulo: "El boulevard de los enamorados" },
            { id: "1JPdOyAiFYpbVrIJAQI9gO_GX6Uf6xzOz", titulo: "Luke y Hasley, el destino" },
            { id: "1KgfwFqQXFFfKa8ug_wXLScKiVNL9aTCI", titulo: "El boulevard de la esperanza" },
            { id: "1Kgo0sC3SG_3HU5LbZSZ59smiRNSJsZou", titulo: "Boulevard eterno" },
            { id: "1KvqX53wCWqJ-s6Ry3uz-PN-8bhZk7qo-", titulo: "El beso robado en el boulevard" },
            { id: "1LcJkMpGR_z6rPiUXLPVxp01HYvq5dRvs", titulo: "Caminos de boulevard" },
            { id: "1LdnNDmPzVPFh18v0v9JvKnjtazCLzvBn", titulo: "Hasley, mi razón" },
            { id: "1LuJ_nKN7UzFzHFtYNc8HzrBA3sDTIVrB", titulo: "Luke, mi destino" },
            { id: "1LwZwHzrxkxTScIRfhcAGiRuEzbI2swUA", titulo: "El boulevard de los sueños" },
            { id: "1M0CIsJhnCcJxAh_sTIQzBdIP4Kha7evr", titulo: "Luke y Hasley, el comienzo" },
            { id: "1MUl4hK0eML__ZvOqedb1Bl3-a2eOjoql", titulo: "Promesas bajo las estrellas" },
            { id: "1Mj9YAZJcJJW1au75ygzI1H0EJ5iEWmN5", titulo: "Miradas que enamoran" },
            { id: "1NWJXhe1b2K1H3VWOsgKaPXkn_TG_Zeh1", titulo: "El beso en el boulevard" },
            { id: "1NZMgofqU3ySbCV45MBiAvGuau8dz4-e9", titulo: "Caminar juntos" },
            { id: "1PAufSIJ9tiZayOqBVXcv7yBSWV0gVqEr", titulo: "Hasley, mi refugio" },
            { id: "1PRF8MtkcIn9Zbv7E3626ftHlEfYQohGj", titulo: "Luke, mi tormenta" },
            { id: "1PhqIvt5Lb_27ztce6ZbF71rfoUka3cEo", titulo: "El reencuentro" },
            { id: "1PlO-rLsr_oEUz_N4ZFNk65q89MK_jgF", titulo: "Segundas oportunidades" },
            { id: "1QC1wkytie-KvkYPIjobNE1TKFUvjoHWj", titulo: "Decisiones del corazón" },
            { id: "1QaQy8E7VnUYIbxB7pq6Bu3VBQa2I2WqX", titulo: "El boulevard nos espera" },
            { id: "1RP7BLLFs5OuOmOyXg5ZviNFuGUXAB73t", titulo: "Amor a distancia" },
            { id: "1RW6bQE63II4eYPz6vaEAPzpQ1g49-3H0", titulo: "Cicatrices del pasado" },
            { id: "1Rkq-uOwdjJIaD4fG5FV1RqLoLA-yfmbD", titulo: "El boulevard de medianoche" },
            { id: "1RxFNc2USDyNDIUgfqtGjTxr0Tb0u9nYd", titulo: "Amanecer en el boulevard" },
            { id: "1TSirLb0dbGRg9I1JAzMbhSyBV8Q-5-Aj", titulo: "Suspiros de verano" },
            { id: "1TqxuYdNXmUjp9lC6mGkHeYCS2lhctHML", titulo: "El último paseo" },
            { id: "1UU8Oi2V9o9yQdM77NXhNPqo1NMBrDefS", titulo: "Eternidad" },
            { id: "1UdnkRGvUttqZbRp0XT-yGoa3dXmhvxa7", titulo: "Siempre juntos" },
            { id: "1Uo8a1oIqlYN_YVrR1O5tbBi-gwul1TP1", titulo: "Cumplir promesas" },
            { id: "1VHemfcHT6A6k5JQftTBKWrrqYmHNMM1D", titulo: "El boulevard de nuestra vida" },
            { id: "1VTCDUqgqqsCCs2cdEnHNVcs9wwQ89nzv", titulo: "Luke y Hasley, para siempre" },
            { id: "1W2YEQT2B38i0otRErn1xDRpxD6o97STq", titulo: "El legado del amor" },
            { id: "1WdiEAZaddixwgSaZGe1LKtnu2t-YAAQi", titulo: "Boulevard infinito" },
            { id: "1Wk0J4UYrBSy5ut90Us0tYYef16plST-Z", titulo: "El primer te quiero" },
            { id: "1WllmWZOD_3Uy2sr4S5cnvg9vVOL0NWgf", titulo: "El boulevard de los recuerdos" },
            { id: "1X8t_FQEY5xac5DVSLjSLKn0eY_HMifZW", titulo: "Hasley, mi alma" },
            { id: "1XQkrL3zC7V_EudQryhpBSZ-YkM6i3ZJb", titulo: "Luke, mi corazón" },
            { id: "1YDBjKSHoaOZ9UwU4_Zdd4JwgQe1zv7jr", titulo: "El boulevard del adiós" },
            { id: "1YL9aQ6Nd6pjq6iBkzI296vNuVj-54NKl", titulo: "Boulevard: el regreso" },
            { id: "1YTLxp2_sv5DYgeyT1cITLNyHfRIxNSln", titulo: "Boulevard: el final" },
            { id: "1YXjGT3sndhxIm_cm_DEAE6h5ybibQuG5", titulo: "Boulevard: el inicio" },
            { id: "1YZrCZOACM2px_eWctGInECqzlESZ6dO7", titulo: "Boulevard de la felicidad" },
            { id: "1YaLCSjNMj9j7ySjx-EHMBiDxLOfkBI38", titulo: "Boulevard de la pasión" },
            { id: "1YwPfhCByBtBhqFcjWIoPCl1wFY0iS1dt", titulo: "Noches de boulevard" },
            { id: "1ZGrPzDPGh3Y6vyY1UGnBMsVjx0s2q_Oj", titulo: "El boulevard de los enamorados" },
            { id: "1ZVixjZqIPngK8g8CGVzDQsNLlO15ynKY", titulo: "Luke y Hasley, el destino" },
            { id: "1Zovr_8pG4Gq6AZqdrtD_8KM0W18WGJAA", titulo: "El boulevard de la esperanza" },
            { id: "1Zvoe6X3nEnAcm7hMwyNmw-Xdf8oq_D2_", titulo: "Boulevard eterno" },
            { id: "1ZylL-sxiyCJyiIzgawQowepoTlovUkwZ", titulo: "El beso robado en el boulevard" },
            { id: "1Zysyn8Qk8rv8kZjSFvejC_ft2-lpFQni", titulo: "Caminos de boulevard" },
            { id: "1_-McMqdqM77eUoC5t1G_VMqlHGmCFoMl", titulo: "Hasley, mi razón" },
            { id: "1_M3uDLommq_ksiMvrH8pI6X_19cG-t17", titulo: "Luke, mi destino" },
            { id: "1aKih-DSYHSfmMYfYZpKApb-Fw4ghgWHP", titulo: "El boulevard de los sueños" },
            { id: "1ahPJzxH-TTsfy5qrxBU4iJCixqO94xPw", titulo: "Luke y Hasley, el comienzo" },
            { id: "1bSV3kmB6t3dfJERQWOko6LyNWO5b_41k", titulo: "Promesas bajo las estrellas" },
            { id: "1bX9LvehqXb2BqB8V6l5lbl1zii37uWH0", titulo: "Miradas que enamoran" },
            { id: "1cKUIyMvIqG8v121iGX_5Rby1kOK94NAh", titulo: "El beso en el boulevard" },
            { id: "1dIPuvGheeG-K4Fx0EnJSu1rNAsyD7mB-", titulo: "Caminar juntos" },
            { id: "1diY2NXn-5-4dDaUS9l8ARMJzwnIFMLc7", titulo: "Hasley, mi refugio" },
            { id: "1e02XXTXfRB_cWDNVJjoEz5BnXASMKTGK", titulo: "Luke, mi tormenta" },
            { id: "1eRygFprMGskODrHgPOM0HI-1hFltUnHp", titulo: "El reencuentro" },
            { id: "1ehZ0xpErJY33GfUpVOeiEVD8uY-FKvT7", titulo: "Segundas oportunidades" },
            { id: "1eiH0pQ_iOoW75UlMUjTrcU3wniiByCWt", titulo: "Decisiones del corazón" },
            { id: "1ek0u9dgh8y3LPhkckHpHEYJjVXYXZLjT", titulo: "El boulevard nos espera" },
            { id: "1ekj5NUbfMlc9WwJcWIp7fBHfES6Rg-wy", titulo: "Amor a distancia" },
            { id: "1eq_kh9SgREv--lY_VPN14yWoB_4mveQv", titulo: "Cicatrices del pasado" },
            { id: "1f4fwxb-8SsHuWTCOyToQYZ9DmyKPrK9m", titulo: "El boulevard de medianoche" },
            { id: "1fzN3nNVzobnnl6TiuMpuMCKaWIvZRfT9", titulo: "Amanecer en el boulevard" },
            { id: "1g_yidq4Egbs9HPQ7eks2Kljgr2R0K-M1", titulo: "Suspiros de verano" },
            { id: "1gwS_M1-I-FdynROsAhE8T_Vv5UbJQFaD", titulo: "El último paseo" },
            { id: "1gyouL0BNHWh43kCmmcOoGZTrClBZd0c3", titulo: "Eternidad" },
            { id: "1huLN-K1PlvwJQyecJYXdavdbGFG5nh2t", titulo: "Siempre juntos" },
            { id: "1i3aSjQaiOf9LyK6fk3G6PDh7W1omuQQ4", titulo: "Cumplir promesas" },
            { id: "1ieS4EDuPUdL3koSaNKmgfxZuAV4GuFa4", titulo: "El boulevard de nuestra vida" },
            { id: "1ivtECiT8wWcvE3fj10eONICl-neBkFsS", titulo: "Luke y Hasley, para siempre" },
            { id: "1j2TiEsgpb0p5fnB1hnZ4fGHGvY7g-JK1", titulo: "El legado del amor" },
            { id: "1j_miZGsTY-aDycYgX6bLo0xkrJkOZpBJ", titulo: "Boulevard infinito" },
            { id: "1jqnPegvNXYGISRXHkSox2QtMG8BLl6lu", titulo: "El primer te quiero" },
            { id: "1k6RawORqYjR_apmGsMz3d8-rZaJfoLEz", titulo: "El boulevard de los recuerdos" },
            { id: "1kNpMxI_W9eMPluzUjp_WLnwQfk3bz0AA", titulo: "Hasley, mi alma" },
            { id: "1kNzg-VVMHrJJ5GI4pY_vWUJpf0tF7ZgZ", titulo: "Luke, mi corazón" },
            { id: "1ky77s3ZKBhrkUUGZBkuY1sZuVFifIXcm", titulo: "El boulevard del adiós" },
            { id: "1lxXvMbuoX7PlhMqnCLhd0bwuV2XqfdZ6", titulo: "Boulevard: el regreso" },
            { id: "1m1-xJC1kaaGw8RBT3NDZp2qyHCmosj4x", titulo: "Boulevard: el final" },
            { id: "1mNv3gYyCropkjXN7pHW91BHayuOpJBtb", titulo: "Boulevard: el inicio" },
            { id: "1mu0zJk5tEv8QrfzmzEx7SWzQMs9CMSdm", titulo: "Boulevard de la felicidad" },
            { id: "1muN6ppsETuHl0wqmYxaDrneYF-CkwK0j", titulo: "Boulevard de la pasión" },
            { id: "1nnLEqZI3OhXpkN_Dl800H7mpQYSUizIe", titulo: "Noches de boulevard" },
            { id: "1oJJ6xCdWIkYETwOAtu3KfXh_EpS5Vm0o", titulo: "El boulevard de los enamorados" },
            { id: "1oOEw6vs4rVKC1-M8i9ywe2V-i9cAntU6", titulo: "Luke y Hasley, el destino" },
            { id: "1okQTAbcwiIrqEeNOkwOEYf74rlUXP9n9", titulo: "El boulevard de la esperanza" },
            { id: "1pXVeHKUWpf8bz-wT1cDvK9TAdmr7ClWC", titulo: "Boulevard eterno" },
            { id: "1plYjb_me3dQRnfAK5lsoLtFtOO1fKVDJ", titulo: "El beso robado en el boulevard" },
            { id: "1pngsUVujKvCpsIBo-0Gvn2ZDvM7pXtS_", titulo: "Caminos de boulevard" },
            { id: "1po-F0O5TIDl9NvQjc-7ydpj0qFYn07XG", titulo: "Hasley, mi razón" },
            { id: "1pvJnWT9GAx5GWJNY6wIeJfgYp3LATsVL", titulo: "Luke, mi destino" },
            { id: "1q1i3ZVEmsajdpor21n99jeo9XNnopVFh", titulo: "El boulevard de los sueños" },
            { id: "1qjUZ2WFhKqKH8jRyuAIkbcxBMf5dkyYH", titulo: "Luke y Hasley, el comienzo" },
            { id: "1qyaSDL2vzt6lZljnHFP_Z3VaBjCEOFdK", titulo: "Promesas bajo las estrellas" },
            { id: "1ru1YgV6No8f22QL4aIbM0xjE1PAti5NR", titulo: "Miradas que enamoran" },
            { id: "1ry4Vsm7kXPCTIgtwWVYtWmTiQbJEvri0", titulo: "El beso en el boulevard" },
            { id: "1s7dW2uEnt_nMFJMQqH58yH6n-04An_7-", titulo: "Caminar juntos" },
            { id: "1sA5KYRAQE1H2ekSViiIIrRK64FPsHOcK", titulo: "Hasley, mi refugio" },
            { id: "1sF6pXk56S0_ktBGQeZKQdQ1YpgOOd6pC", titulo: "Luke, mi tormenta" },
            { id: "1sXtxV1zHPevOJntPc6qtlBxTxq9bA6un", titulo: "El reencuentro" },
            { id: "1sj6wiM5c2uRkI7HqXP9VIaQMjZ4fvz5x", titulo: "Segundas oportunidades" },
            { id: "1slEQcWlb1KmB3U1G59-kYYoYfpu6Ux7F", titulo: "Decisiones del corazón" },
            { id: "1tJsDfe5FNAcTdV8B3n0L2X1S52VMBmSL", titulo: "El boulevard nos espera" },
            { id: "1tn5n7ohaJxXmrFtweRyArtRGmFoU3yAi", titulo: "Amor a distancia" },
            { id: "1tzh5ACvMHdribyDIoPFitQtuPZNUmHDS", titulo: "Cicatrices del pasado" },
            { id: "1uAeqoYGj0Te82SnOruIlZqcOmLzEcWSc", titulo: "El boulevard de medianoche" },
            { id: "1uGZQmfuWWrbo91sQ_mirzWMoteE6r64M", titulo: "Amanecer en el boulevard" },
            { id: "1uH3OXSuY3hecOT1wQtLFn5o2c_oMgt0W", titulo: "Suspiros de verano" },
            { id: "1v1Ab9plvmMxi5fnzFrbLwr4qQ2pXhkMl", titulo: "El último paseo" },
            { id: "1vJp4OOt_SwU2ohM_PneRDP8VTDPssMAd", titulo: "Eternidad" },
            { id: "1vM2fH5rMnWGTEZil5uDxnhlzB7Fb6lQC", titulo: "Siempre juntos" },
            { id: "1vpc9iyRco0x6cZuaicc9yEPUdTvgBeRL", titulo: "Cumplir promesas" },
            { id: "1wMjN42plDTHblGbV13Gs_EFUDgsF9nzF", titulo: "El boulevard de nuestra vida" },
            { id: "1wQ_w_zDP7jMMMgKHMDj23mGbWURFVnX_", titulo: "Luke y Hasley, para siempre" },
            { id: "1wW0u2UQQ86tZge05refz_QkLV04hpJD2", titulo: "El legado del amor" },
            { id: "1w_4t2XGp5vQ9hd9P8IVRuyuTBxtHxOuI", titulo: "Boulevard infinito" },
            { id: "1wsGDtWcmfHi5Ss3bZMkbX3uES64eFLG4", titulo: "El primer te quiero" },
            { id: "1xez3Tz3gjXalqdeAGGiHZl1T6fXtZDgT", titulo: "El boulevard de los recuerdos" },
            { id: "1xfaOEdmJHDTpxToGWEbHZSbacy_lTVWK", titulo: "Hasley, mi alma" },
            { id: "1xrfSieTTWgQEOxcHMSL9pcd697elHZxW", titulo: "Luke, mi corazón" },
            { id: "1xwkNybmTDNV4zLqn7pbhBOj17z9A7AOi", titulo: "El boulevard del adiós" },
            { id: "1y6-uLAXSy6ubCA1Yk0x0g618QrtpVEs2", titulo: "Boulevard: el regreso" },
            
                        
            
        ];

        const contenedorGaleria = document.getElementById('galeriaGrid');

        misRecuerdos.forEach((recuerdo, index) => {
            const num = index + 1;
            const url = `https://lh3.googleusercontent.com/d/${recuerdo.id}=w1000`;
            const titulo = recuerdo.titulo || 'Momento especial';
            const fecha = recuerdo.fecha || '✨';

            // Busca esta parte en tu script y cámbiala por esto:
const cardHTML = `
    <div class="card">
        <div class="image-container">
            <img class="drive-image" src="${url}" alt="${titulo}" loading="lazy" />
        </div>
        <div class="card-content">
            <h3 class="card-title">${titulo}</h3>
            <span class="card-date-badge">${fecha}</span>
            <!-- CAMBIO AQUÍ: Usamos button en vez de <a> -->
            <button class="btn-ver" onclick="document.getElementById('img-${num}').style.display = 'flex'">Ver recuerdo ✦</button>
        </div>
    </div>

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
