import React from 'react';
import GeneralCard from '../../General/GeneralCard';

import IMG_modes from '../../../images/organization/modes.svg';
import IMG_timetable from '../../../images/organization/timetable.svg';
import IMG_transport from '../../../images/organization/transport.svg';

const Organization = () => (
    <div className='container__blue'>
        <div className='organization'>
            <GeneralCard
                cardHead='REŽIMY VYŠETŘENÍ' 
                cardText='RUTINA, POHOTOVOST, STATIM a DOHLÁŠKY' 
                cardLink='/rezimy' 
                cardImg={IMG_modes}
            />

            <GeneralCard
                cardHead='ČASOVÝ ROZPIS PŘÍJMU VZORKŮ' 
                cardText='Časový harmonogram příjmu vzorků na pavilony U a C' 
                cardLink='/prijem' 
                cardImg={IMG_timetable}
            />

            <GeneralCard
                cardHead='TRANSPORT DO LABORATOŘE' 
                cardText='Informace o podmínkách a pravidlech transportu vzorků do laboratoře' 
                cardLink='/transport' 
                cardImg={IMG_transport}
            />
        </div>
    </div>
);

export default Organization;