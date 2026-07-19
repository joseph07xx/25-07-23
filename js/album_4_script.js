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
        // 3. GALERÍA (recuerdos)
        // ============================================================
        const misRecuerdos = [
            { id: "1v66ATM61JI1zEVrFiGQiE5tgP-mgsNlS", titulo: "Te quiero en mi ser" },
            { id: "1vLXQ0arP3mGGUasigY9b2cJdDHCls9_0", titulo: "Te quiero en mis venas" },
            { id: "1wAmsyTGc0HAxJnNVIHoPLn3huYNH5arP", titulo: "Te quiero en mi risa" },
            { id: "1wtbIQezdK1U_Rn-TqTkqJVd21iQqa9GM", titulo: "Te quiero en mi llanto" },
            { id: "1x2cit9F1vr3pdifxpp1gGS1znHREuChc", titulo: "Te quiero en mi silencio" },
            { id: "1xxM9IgUniOTsGcxLYU4-PsophOTaRDHr", titulo: "Te quiero en mi grito" },
            { id: "1yWY7m_tcbVcdqB5KdOiyAxIdvdqRzYSD", titulo: "Te quiero en mi día" },
            { id: "1zE3vk_iGBgk9x13QTy0tDa5qiRMLJtUD", titulo: "Te quiero en mi noche" },
            { id: "1z_UVG4jiC9jjwJyrE9bH-XRniaORy7Td", titulo: "Te quiero en mi sueño" },
            { id: "1zrmknIP6wZLlwHYpLkY9JqzwEYSAdqRj", titulo: "Te quiero en mi realidad" },
            { id: "10FtBs1hq2liTJww20EKtNBOjT5Lubk-l", titulo: "Amor eterno" },
            { id: "10YUYm5EkB3rmiMrdLGW-l3Ie6XZKN_Na", titulo: "Besos de miel" },
            { id: "10pO38PcNMPUb6g4LhhMHSWBuqVxXShUX", titulo: "Tus ojos" },
            { id: "114ek5_yrPb_JB7qe59hZPpVGZnF0khsf", titulo: "Eres mi sol" },
            { id: "11PkwPjfz1cTx1NBOauB4MiVJOhPCo4g1", titulo: "Pasión sin fin" },
            { id: "11T_abs9JUgmQvVld3S-uF2Hqa6SedSrP", titulo: "Abrazo sincero" },
            { id: "11iDDZifLAk2jFhw79Ga70gk1NYcZD0Jf", titulo: "Promesa de amor" },
            { id: "11t60bjnuj72Ygv7VhxKZawkwTYAEEz3i", titulo: "Bajo la luna" },
            { id: "125Xd8CM9R_UaLwL66xCCRgcrEAtkAQen", titulo: "Labios de fuego" },
            { id: "12DVrjMW3cb22HmzZX-TbtD3DIMrqYUsp", titulo: "Mi refugio" },
            { id: "12H5mqsqLscS4VrBocjwQUGCSAsBq4F8p", titulo: "Latidos juntos" },
            { id: "12P4rsajDCn6ks2br5lK6yaSiN30s_GPc", titulo: "Cómplices de amor" },
            { id: "12oxY7I2ygSDEdsPCPQoSSt-bQDuh7av5", titulo: "Almas gemelas" },
            { id: "12siGt6Wso9JwgEVhu5Jy5DNdCN90kn_x", titulo: "Siempre tú" },
            { id: "13Cx7usC3DP_beS78n0icz3k4C8xuIx1z", titulo: "Te quiero" },
            { id: "13FFiqcMAMCbXES3Ig4J80s3kteEahfH6", titulo: "Eres mi vida" },
            { id: "13gg5-MYAmdyLQXSD9nn9qT3eEEPwrO_H", titulo: "Locura de amor" },
            { id: "13jGOOteklJek32nq9O1wsPNBNjWmik94", titulo: "Besos robados" },
            { id: "13mImH3FLJSxAwYlibi0NySSXb-8c9cXn", titulo: "Miradas cómplices" },
            { id: "13uovrQbpg13b2gu07VyqWZssmuJATwfE", titulo: "Amor sin medida" },
            { id: "14Xsdr32UgWJl2m9YPb8aoFz-JZqoTc0d", titulo: "Eres mi sueño" },
            { id: "14jOfYBK5gGVUqfRFuP1Kk8vyb0GqPoc8", titulo: "Corazón contento" },
            { id: "14oHnhbOOUWXAhIr3HiJExa3U--GEeik6", titulo: "Dulce enamorado" },
            { id: "15-vbdINoxLj71xWzo2omYcU2z-5ts-Gv", titulo: "Fuego interior" },
            { id: "15fbTVqpIXu0Q6nwzIagWzqvfnNTecruk", titulo: "Mariposas en el pecho" },
            { id: "15oGubyuhtkdc4P_YYM2xdXWaEcVZALkt", titulo: "Solo tú" },
            { id: "16W-ONVF1dmFPda51xLR4BM0_IEA224wg", titulo: "Eres mi todo" },
            { id: "16pnM0PsT0PCmk76qnU5ikYzEP5esk9SU", titulo: "Sin ti no soy" },
            { id: "17-nAzE9z7doPSu4KaPfCGtcGJqFqI-P6", titulo: "Por siempre tú" },
            { id: "1772-BD9zOuPzJ_6249HBQVHinMVZ91Z9", titulo: "Amor verdadero" },
            { id: "178e6vraSryh0ZQsDIn3aUdUWc3KMt4vd", titulo: "Locamente enamorados" },
            { id: "17CBd0mxZK3NnvX0Q6uZS4POzuArB-TbU", titulo: "Ternura infinita" },
            { id: "17KrA8vCVPdiVcSj6ECUDSNlGJ0g3W4MX", titulo: "Caricias suaves" },
            { id: "17SghOspzdFtzxLwUSxo0uYPokNTR_0KP", titulo: "Eres mi razón" },
            { id: "17kIXm1lsYkHMr_mmKXbQnx_o9TmavkIK", titulo: "Te necesito" },
            { id: "17lJ-tUpJQvX-F4AnwsaUWOc6SBgdP9Z5", titulo: "Amor prohibido" },
            { id: "17mt3-N0HAydIFsCrw30gjSYazz4Unw5Q", titulo: "Secretos de amor" },
            { id: "17xIe3AOKoqvzWDL9n7WYvDmWigQfxWGj", titulo: "Confidencias" },
            { id: "18-qdN7vq4NEshgMMT_8sYKGugRh9oEgT", titulo: "Pasión oculta" },
            { id: "18CGB-6k4HZpwnrfFjdGdWt61k2-UcR_7", titulo: "Amor de verano" },
            { id: "18EsDd825ZDZydkGEQukS9gjObMoqcUrv", titulo: "Eres mi destino" },
            { id: "18UQDhoQvyxyit7E6G9-GHO743WYzLTvd", titulo: "Quererte es mi vida" },
            { id: "18pbAVpMyg3elP9Aju-Au7MSosHQLlRfG", titulo: "Eres mi debilidad" },
            { id: "18rbXDrJge2E0QfgUnga8o85CsWqb272o", titulo: "Un mundo aparte" },
            { id: "19kx7mlBWngVqeliWYX-I7TSrjlfydib1", titulo: "Sueños compartidos" },
            { id: "1A681f7xZhz-qYr2N8ZTZ0hDhUgoddGPI", titulo: "Hasta el infinito" },
            { id: "1A7faXELqoRu93M2vS1agnOt663aPNwYr", titulo: "Siempre en mi mente" },
            { id: "1AQsh84Maafyl-tEBWSUVToFYGbxYwoVY", titulo: "Te llevo en el alma" },
            { id: "1B-du4UQQ46Cw_rk6PfCMhmCp1VpVVKbc", titulo: "Amor inmortal" },
            { id: "1B1h7jZumJYhGT6EEa28ksc4Pz9U45Vcm", titulo: "Eres mi estrella" },
            { id: "1B7EJs05eaAtknktfl8Q8DkQqWJS7rjdX", titulo: "Beso de fuego" },
            { id: "1BA2d3kIHaYq-oVBeRYdlfzxAWD0hz4ZP", titulo: "Abrazo eterno" },
            { id: "1BQUDdZAjnAAkgQjiC9ppDYa0D-4jUOwx", titulo: "Mi lugar seguro" },
            { id: "1C0mmsbZgyRUUTPNocqI-ejZDpiodnQvZ", titulo: "Tus ojos me miran" },
            { id: "1CUc2vwH7fvYim1i4IZR-3JDw8OIdxpS7", titulo: "Pasión sin medida" },
            { id: "1CZUsr5ujbxTWNQ2pRcbeU99cFdMpCJ4p", titulo: "Eres mi anhelo" },
            { id: "1ChGi3ZiCG_OUqTdyUmwgaM_sv52ylHia", titulo: "Amor sincero" },
            { id: "1CkuLWI9gItHAJxtOrasv_Bn3mLfRFvR6", titulo: "Corazón valiente" },
            { id: "1D2B-hwu-4J23qQ2jWt-rPUKj8soTC0Qt", titulo: "Fiel a ti" },
            { id: "1DJaO_b-sHsHHSvQJxsaTAscQkHftcFaP", titulo: "Sin condiciones" },
            { id: "1DTVMaUPju25N9pvhpItZAr4XFX2Y4xNs", titulo: "Amor incondicional" },
            { id: "1DjBrsMtSGKCMeX_YGZlsI2KTJlh5zc-n", titulo: "Eres mi paz" },
            { id: "1DzVe8u-iXxs2DZo7DSrHzOFYTSkV2t2D", titulo: "Torbellino de amor" },
            { id: "1E04DvdoWfBawawYdnAprCYcNiiG4CXZX", titulo: "Lluvia de besos" },
            { id: "1F5_U3IqKol1T25eFxDFC_lGu7kttLNJF", titulo: "Despertar contigo" },
            { id: "1FFgvRTnmfBYW4PXwwCzwHQis9DxoyfxJ", titulo: "Noches de pasión" },
            { id: "1FWYL9p5XgMaY72daNX3VnYeKYNwhGoxT", titulo: "Días de sol" },
            { id: "1F_VzhlK_5cHUxZIa2uwQHpKEmFYvcIGf", titulo: "Eres mi alegría" },
            { id: "1FdRMA2DCwkon8KUYvfissAsiBiwGXoLg", titulo: "Amor de película" },
            { id: "1Fh2hz6LrjOZRq5_0YotyxtWWwLPhZbfs", titulo: "Como en un sueño" },
            { id: "1Fi_p3Als9gaJZ4o6aVlfmXj85qVX-9dX", titulo: "Eres mi realidad" },
            { id: "1FoixSKiRx10Mg-4b4b65BsB7tQCTazuQ", titulo: "Tu voz" },
            { id: "1FzUVrVq90y5fvM-jvLuBCo-33ERsn0ql", titulo: "Tu perfume" },
            { id: "1GiTvnUNKqR38J3bL2HJ7WJP-OegW7yX_", titulo: "Eres mi calma" },
            { id: "1GqJjU13DzSvG4iUmwKkbty9vqLy6mraS", titulo: "Pasión ardiente" },
            { id: "1GsYv8pGFzNCM0R6jHbLBB1OiP3cbGWjG", titulo: "Amor intenso" },
            { id: "1H8jrlUCKJVSKVH5gDO0aG23rota6RG50", titulo: "Susurros de amor" },
            { id: "1HIvBwtRteSqK4bXmGDJmJWPUXgRL5ZOl", titulo: "Mi media naranja" },
            { id: "1HMP47tB5M_tv7OAuz3Y_378vMoDbULtN", titulo: "Eres mi hogar" },
            { id: "1HvcC4FgZ7bLdpxna18Ol9JCUdPpXGekU", titulo: "No puedo vivir sin ti" },
            { id: "1Hx2uedbi87YqMdydgdI4Bob9a_v5cVff", titulo: "Cada día te quiero más" },
            { id: "1I38aMs8aghfE2aWV68l1esMlI5z0Ev0w", titulo: "Eres mi motivo" },
            { id: "1ICrrJM1vjX60cN9o0_jebWVyv2a5BQWN", titulo: "Por ti" },
            { id: "1IWM7NcXh9hQ9P_oFVSbNaUItn3qZKtx1", titulo: "Eres mi fuerza" },
            { id: "1IjFvc1VjK--yWLvBXsONV_XsvlxUT3h3", titulo: "Amor sin fin" },
            { id: "1IkJOgHawqGK8EDmzz3O-QC05KaonmXQ9", titulo: "Eres mi felicidad" },
            { id: "1IpalS7EHolfRrm-c_LVaeMGn__gXILFy", titulo: "Solo pienso en ti" },
            { id: "1JUUbLeru4yjckCkMlVrNcrYAAXq3tSEu", titulo: "Eres mi obsesión" },
            { id: "1JUj_yCiDMRvPSEQdim-inS6J-LvEMBil", titulo: "Locura por ti" },
            { id: "1JWC6Cmm5mNpQBS9gaR5LuhpRaiXYBNeq", titulo: "Siento tu ausencia" },
            { id: "1Jfa-kDebevosCpMl-LySCkz7LuOTiw9G", titulo: "Te extraño" },
            { id: "1K6-DT_2VtNV_m9y261gZGCHB5FBaPOEb", titulo: "Quiero estar contigo" },
            { id: "1KDm63SYF194QkVh6paUvxVJIIhFNiXIV", titulo: "Eres mi mejor amiga" },
            { id: "1K_3aX5ipjwhBZ9pcwxmDEfV0exdjeAbd", titulo: "Eres mi confidente" },
            { id: "1KdIocC9HyqWpSDuJmC_XS-FUcxx1tIxT", titulo: "Te adoro" },
            { id: "1KgoWI-FQhGxCIyKp2BVgYEKku369K0uq", titulo: "Eres mi universo" },
            { id: "1Kn0F4FJFVcGZoyu55u8u0OBtvR_fPTaW", titulo: "Mi corazón late por ti" },
            { id: "1KsnQ599iQJZGL0lWEixmrySHMJnzPQ0P", titulo: "Solo tú y yo" },
            { id: "1LVn_ZhcXIZT58h_U0_mSGwv4GjDCNKEO", titulo: "Amor a primera vista" },
            { id: "1LXeD_k3PJMs8xxh5aORDXrAWNzNRzOCa", titulo: "Te quiero hasta la luna" },
            { id: "1LeTHrwJDAspHQ720DSvlqD8OvR_GfOv8", titulo: "Eres mi cielo" },
            { id: "1LgNw6i_Z-rSLIuYz7pwiuMjbG7x0mDGS", titulo: "Eres mi mar" },
            { id: "1LnXRED1ld7sFeZTpYR-M0rZ8NS6MU7uf", titulo: "Eres mi fuego" },
            { id: "1ML1-A7Q0s22ZnjtggIU_0fRtX96s8X3m", titulo: "Eres mi aire" },
            { id: "1MMM1vx8riddJM2IejyXw12oT9hSAK54S", titulo: "Eres mi tierra" },
            { id: "1MRZZJQIAwsD9X7e0NYEKUZrgmuqNtsgc", titulo: "Beso bajo la lluvia" },
            { id: "1MfkEMPaiu2h6P62wmySoAORIPq216JkN", titulo: "Tus manos en las mías" },
            { id: "1Mx5Pa2rU9ZZQeZvU4U21Md9jGX3tLEaY", titulo: "Miradas que traspasan" },
            { id: "1NErmydWdJLLxRXoBzOxrVWLjGBCgk6ze", titulo: "Encuentro de almas" },
            { id: "1NLivbTRpsOimB38QLp1vhfAJay3YBNDp", titulo: "Sueño contigo" },
            { id: "1NOc2ngmkWrED0bxKPEtT2qitc8d82OCD", titulo: "Eres mi poesía" },
            { id: "1O8O1qIvPrK7l9o1P5vcg_GzOxgeB7qUM", titulo: "Tu risa" },
            { id: "1OkahNpb9zNSpajpo1U0aIjzMWGdlyKDm", titulo: "Eres mi melodía" },
            { id: "1Oq1RVUE5K2CGaL2C0kBhTiwfqbwrip6M", titulo: "Pasión desbocada" },
            { id: "1PbFIk2_7olCvb2R6Sz73wgOje3MS7SdO", titulo: "Amor salvaje" },
            { id: "1PqSVmXEuh8ohO6JGQ5kVMhpjuXfKQn_8", titulo: "Dulce locura" },
            { id: "1QBRcOEMe1jgocLe7Yz5ok3TzO_hZKcIj", titulo: "Eres mi medicina" },
            { id: "1QCBQiQ73JsUZXxxxAjsoJvTSxYfTbfYj", titulo: "Tus abrazos" },
            { id: "1QESivwkM-9I4bbfIUFvF2bG4BCVw6IPm", titulo: "Eres mi consuelo" },
            { id: "1QLuUaB16TMfSRmZNlzT0BLfNqKfKcU8_", titulo: "Sin ti, nada" },
            { id: "1R6nof10WTnsVgb47G9wU9_du0HlAIPmU", titulo: "Eres mi faro" },
            { id: "1RCS6eUE2SfxeHhKQEi81o2ab6O_rffex", titulo: "Amor de novela" },
            { id: "1RTa7uOTdW-ii6N-hH3fMnoERs13FShq5", titulo: "Eres mi primavera" },
            { id: "1RnW3It2rbBP6CKzZQM5UEpMrcqLeEJXd", titulo: "Eres mi invierno" },
            { id: "1S94_-ddMn_vdn8sR_UOIW776sozRyvOl", titulo: "Eres mi otoño" },
            { id: "1SrnhdmFjZx9nrK7TjLgLdcSSzwbvFVCB", titulo: "Eres mi verano" },
            { id: "1St7H6-PVicswWB4xK-LbLK2fSawZh7jj", titulo: "Estaciones de amor" },
            { id: "1T-5v4d0Kz_LqahUyFi_kBUlWzAXu9QlD", titulo: "Eres mi día" },
            { id: "1TQ8HmKW7AJYJZzxG-eeMxQSPt2tceT6s", titulo: "Eres mi noche" },
            { id: "1Tk-xsWAIXuaNVS9iJBmSwRR2cURvT3FL", titulo: "Eres mi amanecer" },
            { id: "1U8EAPtIH4GVIQTbvroj5P3tv7-BYymxv", titulo: "Eres mi atardecer" },
            { id: "1UAGherzAK5OlFCD5fg-cKfuqr-AAVrga", titulo: "Eres mi mediodía" },
            { id: "1UJYTNky4YO4VSFww6tcNn1dpp_XRBN0a", titulo: "Cada hora contigo" },
            { id: "1UYwJCkSvv3-wVSXc5U7hhnmcGXsnGZ60", titulo: "Minutos eternos" },
            { id: "1Um1t_JdkdqALd9nKWmhF_vFyRzd7pDb-", titulo: "Segundos de pasión" },
            { id: "1V3I89CajfCX_AGK3pkVXAz3GL1K8-qUL", titulo: "Instantes de amor" },
            { id: "1V7tR0ycm-VNwEPQYTMPti5aN98opP4cS", titulo: "Eres mi espacio" },
            { id: "1VEVcpwTWdfQtFXZip1Q9mGc7sdBlR7Bj", titulo: "Eres mi tiempo" },
            { id: "1VbI08cn3rlcaadNTiZSmYW6JkPt61-8n", titulo: "Mi razón de ser" },
            { id: "1Vr0b7SasvcbEchgL4kwfiJ57ruNfZ0Lu", titulo: "Mi aliento" },
            { id: "1W8eJiQJ5N56MawM8-hbcmH8G3ol0hS1I", titulo: "Mi vida eres tú" },
            { id: "1WAT-mZ383PGIb5Bgn_HQ0DRlSpIcdq2N", titulo: "Tú me completas" },
            { id: "1WHbys-biFcjOvpVYsxfTDUqDu3zyUF8Z", titulo: "Eres mi otro yo" },
            { id: "1Wn9yOBTBEvUjUy4WE-5hJ_Hxw3FsID_F", titulo: "Complemento perfecto" },
            { id: "1WsaBvsqb7_7BPh6Wk5w57iXLJL41Y65u", titulo: "Amor sin límites" },
            { id: "1X0sAUcRnDt9T0ofOD5DoLgGJM4jr3x1Y", titulo: "Sueño hecho realidad" },
            { id: "1XCmASUPU_FH-tTgGCqPpfu3840sjMT94", titulo: "Eres mi premio" },
            { id: "1XMfxznnen9M2gnoELPs-SoXn08op59NV", titulo: "Eres mi tesoro" },
            { id: "1XPdU-45_c2wQt9q-TcqPQpQc58JbivVV", titulo: "Eres mi joya" },
            { id: "1XTdgoSnVCfE5ipBsP6aWVEO8lThEEIId", titulo: "Eres mi luz" },
            { id: "1XrFDUgTORRNPHfxiqauy2Mr2M7Xr15iD", titulo: "Eres mi guía" },
            { id: "1Y5njRCmVzgYUbY3BKGUzAtoDTOvl6ZJx", titulo: "Eres mi camino" },
            { id: "1YiLez89pc6A7PAFQypsyxIq8F6ou3JVm", titulo: "Eres mi destino final" },
            { id: "1Yr45NVDlOd_y9A5D7O6eZlXIFrzBL0Y8", titulo: "Juntos hasta el final" },
            { id: "1ZJwnXKT1fj4se6ybjDjSb2dCfdIDg-k4", titulo: "Nunca me dejes" },
            { id: "1ZjBJUm3GRxMz7kS6Y-Cde0HWEzFOmkNT", titulo: "Siempre contigo" },
            { id: "1ZjRYRDbJCodVnYkHD922nK6rgv_M8aE5", titulo: "Eres mi promesa" },
            { id: "1ZlwJs7kVfRYfIZAFnBeqWZgXbw3gN1-2", titulo: "Te prometo amor" },
            { id: "1ZwvyO-QqaWTWeqGAGCmDUgOXEWd7aqCP", titulo: "Eres mi juramento" },
            { id: "1_4htEEfvT00cxqGP6je6Im7iiIuUGM8V", titulo: "Eres mi fe" },
            { id: "1_7XPd-v-J7bbAdIiELKa2PyM73lcmXH8", titulo: "Eres mi esperanza" },
            { id: "1_7rLU4jhPTZyb-FBqwa2EfKm3rX9hIvF", titulo: "Eres mi alegría de vivir" },
            { id: "1_BrByKbo4QFYr5SSIRFBCIxxiI_O227d", titulo: "Eres mi sonrisa" },
            { id: "1_Bs9TNk-noX04ItgUTs4g-HhUuA0IlTO", titulo: "Eres mi lágrima" },
            { id: "1_SWWE_RwJNMZpAFdJNm_1dhqvvL8sws7", titulo: "Eres mi emoción" },
            { id: "1_fon1CsHDyKnVGUj-gzymT-U9JkLtj_O", titulo: "Eres mi sentimiento" },
            { id: "1_zhzA2FrjCbpkxBB5FMSWLrV7_NB11Nk", titulo: "Eres mi pasión prohibida" },
            { id: "1a3OcuGfiTe-Hd5ZxOfsMWp1Yvc6C1VGv", titulo: "Eres mi deseo" },
            { id: "1a5CffANcNAv5uv7Kmh4I1F247T8ctRB6", titulo: "Eres mi fantasía" },
            { id: "1aRYYWuNgUMAnLHw49WYmGAAPkecsC7kB", titulo: "Eres mi realidad soñada" },
            { id: "1aVB9TCyMUxJJBVhEFS-JDWlwthy7m9I6", titulo: "Eres mi sueño despierto" },
            { id: "1asjIzJBmL5VsTnSpnyFUH0o95KW7c4uO", titulo: "Eres mi cuento" },
            { id: "1bLEqgwi3AWHDCX6yrwC3-MAn8-c0Q3kj", titulo: "Eres mi poema" },
            { id: "1cF3SV420dpS_r5o7i1mFr0Cc53a7ycxC", titulo: "Eres mi canción" },
            { id: "1cPlSQsUHmO9ci3hpGYeKOAUCNohnAj6R", titulo: "Eres mi ritmo" },
            { id: "1cUbp2eJ1cktu7kuSjhi_Iz-oameuqWI9", titulo: "Eres mi danza" },
            { id: "1ceNas444HtGB-Cz67bCFdRQJnOgIzQ4p", titulo: "Eres mi arte" },
            { id: "1clP4wmUknGWfTZQNgwj9PxZqM9xVjOHU", titulo: "Eres mi obra maestra" },
            { id: "1d0JNKGsKtmfKyq2vdFAQ7oqc1JVXJMYr", titulo: "Eres mi creación" },
            { id: "1dIb1EwpRau8oimSiyKi6mE8vQV_ogvUz", titulo: "Eres mi inspiración" },
            { id: "1dn6TqBSUqVgTBggseFwmLvuSPwDEFKfK", titulo: "Eres mi musa" },
            { id: "1e-Hr4Cdne3h5NGXwpQtcE2RU6JoDNwCv", titulo: "No hay nadie como tú" },
            { id: "1e9Ba353wYIDi9NWjSP73SbtMBTqjOdGF", titulo: "Eres único" },
            { id: "1e9UBOfcckfEnCuBaaLHOD7wKMHoF9Tz7", titulo: "Eres especial" },
            { id: "1eL-ZsDUL1jLj_ZQvFePKu8tr1AUgj4wD", titulo: "Eres mi elegido" },
            { id: "1eq9Bm_qCDHiJOIoGN4xulfuW3LD-WQ15", titulo: "Eres mi amor verdadero" },
            { id: "1eqGA3En9CXgsbSDIYN0Re6tizS6aQjcm", titulo: "Te elijo a ti" },
            { id: "1erJ_VnKdjZlwMCB_OIlY1zoZuIruAxIB", titulo: "Eres mi opción" },
            { id: "1f1msxAMu2Rqrbq3PNRLfpuqw9kmV0bN0", titulo: "Eres mi decisión" },
            { id: "1fEryHdPRck7jAxzxFjjQw9P2vZGrqA5V", titulo: "Eres mi futuro" },
            { id: "1fbagUksZ_MvEO7Vc5wsDVw2TFsrmSsfm", titulo: "Eres mi presente" },
            { id: "1fmpIoHCdMZ_m0LAbcTjgml-QZOnLn8tP", titulo: "Eres mi pasado" },
            { id: "1frgeOMt-Tc8QieTLwIlKzdNaUoyVaoAq", titulo: "Eres mi historia" },
            { id: "1fv2FZ_VGdSdwyS3QUZz0XZ4rtDD0e7GW", titulo: "Eres mi leyenda" },
            { id: "1fvHSBexOKpaFyuMrpKULhFBs0mCRran3", titulo: "Eres mi mito" },
            { id: "1g1wMwMETH6QxIK4PWD2Wdw0goMYXPkLE", titulo: "Eres mi galaxia" },
            { id: "1g9EU8YHxKtynrhoVECHc_cDxHe2s6Y46", titulo: "Eres mi estrella fugaz" },
            { id: "1gAiwJpyZ71gOHLc5UvKTqAhooxlP16XH", titulo: "Eres mi cometa" },
            { id: "1gL9z5ruVMgB-PlqOQEmDzYXQZ03mBw-7", titulo: "Eres mi luna" },
            { id: "1gLHB7HZCMpMdrbRE-iIlpfhFV1JtiFFC", titulo: "Eres mi marea" },
            { id: "1gZlhGkZXHctbiWZh76XOWG-373-22CYD", titulo: "Eres mi olas" },
            { id: "1gg90T-PdaSBwB662yEcdciOuPf4mEEVa", titulo: "Eres mi playa" },
            { id: "1h44ATxIBpF3JWiaGrX8GdsqhQDSsyU6X", titulo: "Eres mi arena" },
            { id: "1hFj21dMe9f55TkucQXOaPsZB7s_9NWDk", titulo: "Eres mi océano" },
            { id: "1i819XxXL_NDSsKxTTOFnizXanikvgdAB", titulo: "Eres mi profundidad" },
            { id: "1iUlv7jiDOJB4Ynmr3gVH1hVHnDb_zMSF", titulo: "Eres mi nube" },
            { id: "1jO-Fx0hZOltkETGwjc47Y1ti3_oNoLtF", titulo: "Eres mi tormenta" },
            { id: "1jQ-G0fo4HygHrYAFBnCxtLO7ZX5LmomU", titulo: "Eres mi brisa" },
            { id: "1jsPlLwc3Z_KOD_x2js2RC-hlteDB7aIx", titulo: "Eres mi viento" },
            { id: "1kIUwgaa-uhFMgnMqqg2sDpQg-l7gpG-a", titulo: "Eres mi sombra" },
            { id: "1kNkyV_fUJ_Z0hXE7cuDslTKODvx58D-p", titulo: "Eres mi reflejo" },
            { id: "1kOdIF2d30A-5OeI7Iz_csHb6aQZ75kz-", titulo: "Eres mi espejo" },
            { id: "1kToXhMm1YOqgasrq5Zdr5CM-A57kbcOt", titulo: "Eres mi imagen" },
            { id: "1keJzYqxNKKJefdq-PPjCaWcGn3VQOMnd", titulo: "Eres mi pareja" },
            { id: "1l-N58KTMzMmmsSkUoxZwdsx-GkkyM9NL", titulo: "Eres mi compañero" },
            { id: "1lHXDbEIKoEjSX6Mpk1VMmw6ymrqYTUd0", titulo: "Eres mi amante" },
            { id: "1lYOfL_-Wf6AbELu8wgVCTKf-sheS-UGh", titulo: "Eres mi amigo" },
            { id: "1ldvjETHwiUgBYgiwl2oq34R511vhiFQ-", titulo: "Eres mi socio" },
            { id: "1ln8w6NNfpos-WEmQ4cPEBFwD-kc8VecI", titulo: "Eres mi equipo" },
            { id: "1lomvNOT7EbjRq7W58EPPmsiVe-3p55C1", titulo: "Eres mi familia" },
            { id: "1m0qUhzUeEHmOXW7riHAqpsjKIIZ4wXnm", titulo: "Eres mi lugar" },
            { id: "1m6V24Or67DZpw9S8K9n7eLQOAoZQ7uCX", titulo: "Eres mi viaje" },
            { id: "1mJnnPa7oH7lNLlyBsTXzuksoz9DEABUz", titulo: "Eres mi aventura" },
            { id: "1m_kyBzoduVzEXrklBVGRJe31uzi2lmPv", titulo: "Amor de ensueño" },
            { id: "1mlbxQ_rkqcUJ7vfjyIUpEfHQpauosA5E", titulo: "Pasión de fuego" },
            { id: "1mvaaWOQbRiixRlmxoOzIgrtulShoq-88", titulo: "Besos de luna" },
            { id: "1nFkkTXZp90O3Kjrwbodb6DX2i9miusYG", titulo: "Abrazo de osito" },
            { id: "1nOWDulBzXbgD2FFee3xKIFq_vlKTFKn1", titulo: "Mirada de amor" },
            { id: "1nZKEztnH4KeaIl4h_i0giNTnRtVNalFl", titulo: "Corazón de cristal" },
            { id: "1ntksX7k6QVm1nCaVIAiK_d8TXWGjj9ZK", titulo: "Alma de poeta" },
            { id: "1o9H92PuwTxO2twivscvDn0xjvmhyfosI", titulo: "Vida de colores" },
            { id: "1oBG0KApmfq7CViqlRbmU_9M3Sa2cjdik", titulo: "Sueños de amor" },
            { id: "1oD8whbiVKBoTwWedIDpWOWvZfmqubt20", titulo: "Deseos de pasión" },
            { id: "1oMWrq3QaMecqlPGkvQMEF3HkLPESD0yP", titulo: "Locura compartida" },
            { id: "1onpWK0ogKAKICHPVPt3GUy8fKQ4RhGlQ", titulo: "Ternura sin fin" },
            { id: "1p0SxrIwl_J4emxKTj8fBR4euzHzmm7BL", titulo: "Caricias de seda" },
            { id: "1p7XwRx_4ho_NymzhrQLkFPBRBsMNrORu", titulo: "Suspiros de ternura" },
            { id: "1pGb5muRCVzcA6Hs75vHKvXhQR0G5-UM2", titulo: "Palabras de amor" },
            { id: "1pKrMr8Ay6n-nLd4twLWdSrpooXF9JTxp", titulo: "Silencio cómplice" },
            { id: "1pSCfWTHPlIrYfXM8CgAYdQRC2xgio2jt", titulo: "Miradas furtivas" },
            { id: "1qBnZHzy9s32HAkdPmlWuXkpdecdJRano", titulo: "Encuentros casuales" },
            { id: "1qITVafenML9Ljk4yBENFH0DluPEguq3-", titulo: "Despedidas con besos" },
            { id: "1qPfPtLIbu6AP6jpNhH_0JR601joqL13Y", titulo: "Reencuentros ardientes" },
            { id: "1qQpASt69LpYVGduZVuDFpThed8sJPwRt", titulo: "Promesas eternas" },
            { id: "1qViVJjawKtmCwVRpbr5rameeEV6EoFDw", titulo: "Juramentos de amor" },
            { id: "1rIlvFfqznH2_Uj3rOaALGdMqmC5HXx7X", titulo: "Fidelidad absoluta" },
            { id: "1rOGWNhhS_1U8-Uyzg1q9tS3SUZZ3A3te", titulo: "Confianza plena" },
            { id: "1rooFB5hhVLSlk9YPUANgCklnT1DcBOzc", titulo: "Respeto mutuo" },
            { id: "1rz786crZMZ_fElZcCgMCtftovfULT8La", titulo: "Admiración profunda" },
            { id: "1s7zGD_nY0avN03_-d_ZVS-3jdigOcMlR", titulo: "Gratitud infinita" },
            { id: "1sA6g3Ky-b4b0gRVmxKdvvWqH3EOAes5B", titulo: "Amor a flor de piel" },
            { id: "1sEuVCN_F9DzNtf1kncvPnSYG9n1RamVq", titulo: "Pasión desenfrenada" },
            { id: "1seJS3WtlWAPFz6crqIgVohF0kjiMFvqW", titulo: "Besos eternos" },
            { id: "1t12GSTbaTx3JZPAHRjOyTAvXep57lnk7", titulo: "Abrazo cálido" },
            { id: "1tGhx-mF5jYM2on0vpTJyZIQZR0RUk31k", titulo: "Mirada profunda" },
            { id: "1tNGmnsXMaZIS-ZshpOPPJwkvq7gdLbTn", titulo: "Corazón latiendo" },
            { id: "1tebLH2iSEsiMrpFv2BuIA-OeW9Gwi2v2", titulo: "Alma gemela" },
            { id: "1teur45SkS4qTWlLgcWqW1aHLQF4TI5dC", titulo: "Vida compartida" },
            { id: "1tgUpgLnVzxoTvSsq1QDEPpG0pXVP6a1s", titulo: "Amor de locos" },
            { id: "1tlBSLn9B73XZ3n93fnsu4Pjp1fGOtYTs", titulo: "Pasión oculta" },
            { id: "1u8wB6Bnk_W99-4Pxx8EDUe9uaJmlesFF", titulo: "Besos bajo el sol" },
            { id: "1uORu-_VJl-Y4EdTL5aGNLxOyw8IDUIM3", titulo: "Abrazos de medianoche" },
            { id: "1uTJpmEXMLWxTBV2w04Zn1AF9WBGBxRlk", titulo: "Miradas de deseo" },
            { id: "1uwhazDqlH4ts32IqsDBWcfQvKfMjPqqF", titulo: "Corazón inquieto" },
            { id: "1vApegX3Ufa79QdA693oBwUtP9I6BaZxi", titulo: "Alma errante" },
            { id: "1vEKdCuTHJLL4BIUdccLx9Uixh2LKTzHD", titulo: "Vida de ensueño" },
            { id: "1vHCQ8xunsqWoqCw2iUGtPn0XN61L4TGo", titulo: "Sueños rotos" },
            { id: "1wKoTI8kpafjm4p5goSsC75RyWHjO-YaD", titulo: "Deseos cumplidos" },
            { id: "1wTlZUtxquoFRAa9ojbW4oH_Xj7nwfo-7", titulo: "Locura pasajera" },
            { id: "1wrcye67Y8jNoyWjABisdIJiXBDD3V-s2", titulo: "Ternura fugaz" },
            { id: "1wreQvNecdEb58yBVkN9DfNpp_UTBYiQc", titulo: "Caricias del alma" },
            { id: "1wxJQGJRq3zxg0IGkAW1tLpzM6bP-etv8", titulo: "Suspiros eternos" },
            { id: "1xFjdHHTER9hE1A5t1atoi9EZr8Zg2rmJ", titulo: "Palabras susurradas" },
            { id: "1xMMZzPa3rdxhDZrrro71Yzv8-3QZ3FDz", titulo: "Silencio que habla" },
            { id: "1xv2Y8F2XVG-eCgHD557QYZaW1eOoNCvo", titulo: "Miradas que matan" },
            { id: "1yCfix_8B9s0TEc8_F9jDO9MxpjjydMfg", titulo: "Encuentros furtivos" },
            { id: "1yiwcU3pPMiDLbIuGZZF8t2_XEDGjt8nQ", titulo: "Despedidas húmedas" },
            { id: "1yqvFOeSICu-fa_S0UXki5nFCufGzjlTg", titulo: "Reencuentros felices" },
            { id: "1yuW5FDQgDOxjCm0tSiisv0OUF3eL4nUK", titulo: "Promesas rotas" },
            { id: "1zBjSYhMrUPi3kYDxGhFnryV0vSSbIZZ2", titulo: "Juramentos eternos" },
            { id: "1zZzrVdQ4DbTtPSQfKbAg7syhunOVcTUP", titulo: "Fidelidad eterna" },
            { id: "1zkYLcroiKyeSZbZ36hTUR47U_2r3FxAv", titulo: "Confianza ciega" },
            { id: "1zmlGAaDJxifMraGc6gMuwjU_qLpiwtNg", titulo: "Respeto infinito" },
            { id: "1zoN5UuQucE-jqFREWwlGHG7DSJXLH6vD", titulo: "Admiración mutua" },
            { id: "1zyd_cYKdQnxqTYa0U26cs5J8QHcJKDdj", titulo: "Gratitud eterna" }
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
