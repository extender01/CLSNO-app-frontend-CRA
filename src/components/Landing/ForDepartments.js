import React from 'react';
import GeneralCard from '../General/GeneralCard';

import IMG_draws from '../../images/forDepartments/about/draw_256.png';
import IMG_methodsList from '../../images/forDepartments/about/methods3_256.png';
import IMG_organization from '../../images/landing/organization_256.png';
import IMG_guides from '../../images/landing/help.svg';


const ForDepartments = () => (
    <div className='container__blue'>
        <div id='oddeleni'></div>
        <h2>Informace pro ambulance a oddělení</h2>
        <div className='for-departments'>

            <GeneralCard
                cardHead='ODBĚRY'
                cardText='Informace ke odběrům, žádankám a vzorkům'
                cardLink='/odbery'
                cardImg={IMG_draws}
            />

            <GeneralCard
                cardHead='SEZNAM METOD'
                cardText='Seznam metod prováděných v SNO a odesílaných do smluvních laboratoří.'
                cardLink='/metody'
                cardImg={IMG_methodsList}
            />

            <GeneralCard
                cardHead='ORGANIZACE PROVOZU'
                cardText='Kdy a jak laboratoř přijímá vzorky k analýze.'
                cardLink='/organizace'
                cardImg={IMG_organization}
            
            />

            <GeneralCard
                cardHead='NÁVODY A POSTUPY'
                cardText='Návody týkající se laboratorních žádanek'
                cardLink='/navody'
                cardImg={IMG_guides}
            
            />

        </div>
    
    </div>
);

export default ForDepartments;