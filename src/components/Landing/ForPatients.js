import React from 'react';
import GeneralCard from '../General/GeneralCard';

import IMG_fromMudr from '../../images/landing/mudr.svg';
import IMG_spl from '../../images/landing/spl.svg';
import IMG_ogtt from '../../images/landing/ogtt.svg';


const ForPatients = () => (
    <div className='container__blue'>
        <div id='pacienti'></div>
        <h2>Informace pro pacienty</h2>

        <div className='for-patients'>

            <GeneralCard 
                cardHead='JDU OD LÉKAŘE S ŽÁDANKOU NA ODBĚR' 
                cardText='Informace o odběrech, prováděných pro ambulance a oddělení' 
                cardLink='/pacient-od-lekare' 
                cardImg={IMG_fromMudr}   
            />

            <GeneralCard 
                cardHead='CHCI SI SÁM NECHAT UDĚLAT VYŠETŘENÍ JAKO SAMOPLÁTCE' 
                cardText='Informace pro ty, kteří si chtějí sami nechat udělat a zaplatit vyšetření' 
                cardLink='/pacient-samoplatce' 
                cardImg={IMG_spl} 
            />

            <GeneralCard 
                cardHead='OGTT' 
                cardText='Informace o orálně glukózovém tolerančním testu (test na cukrovku)' 
                cardLink='/pacient-ogtt' 
                cardImg={IMG_ogtt}
            />

        </div>
    </div>
);

export default ForPatients;