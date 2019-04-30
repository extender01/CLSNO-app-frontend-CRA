import React from 'react';
import GeneralCard from '../../General/GeneralCard';

import IMG_memo from '../../../images/forDepartments/manuals/memo.jpg';
import IMG_atb from '../../../images/forDepartments/manuals/atb.jpg';
import IMG_dohlaska from '../../../images/forDepartments/manuals/dohl1.jpg';

const Manuals = () => (
    
    <div className='container__blue>'>
        <div className='manuals'>
            <GeneralCard
                cardHead='ZOBRAZENÍ KOMENTÁŘE K VÝSLEDKU' 
                cardText='Jak zobrazit komentář u výsledku metody v NIS Akord' 
                cardLink='/navody/memo' 
                cardImg={IMG_memo}
            />

            <GeneralCard
                cardHead='ŽÁDANKY NA GENTAMICIN A VANKOMYCIN' 
                cardText='Jak vytvořit žádanku na stanovení antibiotik Gentamicinu nebo vankomycinu' 
                cardLink='/navody/gentavanko' 
                cardImg={IMG_atb}
            />

            <GeneralCard
                cardHead='VYTVOŘENÍ DOHLÁŠKY' 
                cardText='Jak vytvořit žádanku k dohlášení vyšetření z jiného odběru' 
                cardLink='/navody/dohlaska' 
                cardImg={IMG_dohlaska}
            />
        </div>
    </div>
);

export default Manuals;