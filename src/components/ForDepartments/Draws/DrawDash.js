import React from 'react';
import GeneralCard from '../../General/GeneralCard';

import IMG_draws from '../../../images/forDepartments/about/draw_256.png';
import IMG_correctRequest from '../../../images/forDepartments/about/methods3_256.png';
import IMG_drawOrder from '../../../images/forDepartments/draw/draw_order.svg';
import IMG_drawMistakes from '../../../images/forDepartments/draw/draw_mistakes2.svg';
import IMG_transport from '../../../images/organization/transport.svg';
import IMG_drawVein from '../../../images/forDepartments/draw/draw_vein.svg';
import IMG_drawAbr from '../../../images/forDepartments/draw/draw_abr.svg';
import IMG_drawGlyk from '../../../images/forDepartments/draw/draw_glyk.svg';
import IMG_drawUrineMorn from '../../../images/forDepartments/draw/draw_urine_morn.svg';
import IMG_drawUrineCol from '../../../images/forDepartments/draw/draw_urine_col.svg';
import IMG_drawHamburger from '../../../images/forDepartments/draw/draw_hamburger.svg';
import IMG_drawFob from '../../../images/forDepartments/draw/draw_fob.svg';



const DrawDash = () => (
    <div className='container__blue'>
        <h2>Obecne informace k odberum</h2>
        <div className='general__line draw__dash'>
            
            <GeneralCard 
                cardHead='ODBĚROVÝ SYSTÉM' 
                cardText='Informace k systému používanému v SNO' 
                cardLink='/odberovy-system' 
                cardImg={IMG_draws}
            />

            <GeneralCard 
                cardHead='SPRÁVNÉ POŘADÍ ZKUMAVEK PŘI ODBĚRU' 
                cardText='V jakém pořadí se mají správně odebírat zkumavky?' 
                cardLink='/odbery-poradi' 
                cardImg={IMG_drawOrder}
            />

            <GeneralCard 
                cardHead='CHYBY V PREANALYTICKÉ FÁZI' 
                cardText='Seznam chyb, kterých je třeba se vyvarovat pro obdržení validního výsledku' 
                cardLink='/odbery-chyby' 
                cardImg={IMG_drawMistakes}
            />


            <GeneralCard 
                cardHead='SPRÁVNÉ VYPLNĚNÍ ŽÁDANKY' 
                cardText='Údaje, které musí každá žádanka mít, podmíky přijetí vzorku.' 
                cardLink='/zadanky' 
                cardImg={IMG_correctRequest}
            />



            <GeneralCard
                cardHead='TRANSPORT DO LABORATOŘE' 
                cardText='Informace o podmínkách a pravidlech transportu vzorků do laboratoře' 
                cardLink='/transport' 
                cardImg={IMG_transport}
            />
        </div>

        <h2>Informace ke konkretnim typum odberu</h2>
        <div className='general__line draw__dash'>

            <GeneralCard 
                cardHead='ŽILNÍ ODBĚR' 
                cardText='Pokyny pro správné provedení standardního žilního odběru' 
                cardLink='/odbery-zilni' 
                cardImg={IMG_drawVein}
            />

            <GeneralCard 
                cardHead='ODBĚR ABR (ASTRUP)' 
                cardText='Pokyny pro správné provedení kapilárního odběru pro ABR' 
                cardLink='/odbery-abr' 
                cardImg={IMG_drawAbr}
            />

            <GeneralCard 
                cardHead='KAPILÁRNÍ ODBĚR GLYKÉMIE' 
                cardText='Pokyny pro správné provedení kapilárního odběru pro glykémie' 
                cardLink='/odbery-glyk' 
                cardImg={IMG_drawGlyk}
            />

            <GeneralCard 
                cardHead='ODBĚR RANNÍ MOČE' 
                cardText='Pokyny pro odběr ranní (jednorázové moče) např. pro stanovení chemicky a sedimentu' 
                cardLink='/odbery-moc-ranni' 
                cardImg={IMG_drawUrineMorn}
            />


            <GeneralCard 
                cardHead='SBĚR MOČE' 
                cardText='Pokyny pro správný sběr moče pro biochemické analýzy' 
                cardLink='/odbery-moc-sber' 
                cardImg={IMG_drawUrineCol}
            />

            <GeneralCard 
                cardHead='HAMBURGERŮV SEDIMENT' 
                cardText='Pokyny pro sběr moče pro stanovení Hamburgerova sedimentu' 
                cardLink='/odbery-hambac' 
                cardImg={IMG_drawHamburger}
            />

            <GeneralCard 
                cardHead='ODBĚR STOLICE NA OK' 
                cardText='Pokyny pro správný odběr stolice na vyšetření okultního krvácení' 
                cardLink='/odbery-stolice' 
                cardImg={IMG_drawFob}
            />
        </div>
    </div>
);

export default DrawDash;