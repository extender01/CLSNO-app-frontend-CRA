import React from 'react';

import IMG_koag from '../../../../images/forDepartments/drawsystem/koag.png';
import IMG_sed from '../../../../images/forDepartments/drawsystem/sed.png';
import IMG_se from '../../../../images/forDepartments/drawsystem/se.png';
import IMG_sg from '../../../../images/forDepartments/drawsystem/sg.png';
import IMG_pli from '../../../../images/forDepartments/drawsystem/pli.png';
import IMG_edta from '../../../../images/forDepartments/drawsystem/edta.png';
import IMG_naf from '../../../../images/forDepartments/drawsystem/naf.png';


const DrawOrder = () => (
    
    <div className='container__blue'>
        <div className='draw__order'>
            <h1>Doporučené pořadí zkumavek při odběru</h1>

            <div className='draw__order__item'>
                <div className='hemoculture'></div>
                <p className='draw__order__item--additive'>1. Odběr na hemokultury</p>
                <p className='draw__order__item--example'>Odběrové nádoby určené na hemokultivaci</p>
            </div>   
            
            <div className='draw__order__item'>
                <img src={IMG_koag} alt='Koagulace - citrát sodný' height='64px' />
                <p className='draw__order__item--additive'>2. Citrát sodný</p>
                <p className='draw__order__item--example'>Koagulace</p>
            </div>  
            
            <div className='draw__order__item'>
                <img src={IMG_sed} alt='Sedimentace - citrát sodný' height='64px' />
                <p className='draw__order__item--additive'>2. Citrát sodný</p>
                <p className='draw__order__item--example'>Sedimentace</p>
            </div>  
            
            <div className='draw__order__item'>
                <img src={IMG_se} alt='Biochemie, RIA - Akcelerátor srážení bez gelu' height='64px' />
                <p className='draw__order__item--additive'>4. Akcelerátor srážení bez gelu</p>
                <p className='draw__order__item--example'>Biochemie, RIA</p>
            </div>

            <div className='draw__order__item'>
                <img src={IMG_sg} alt='Biochemie - Akcelerátor srážení s gelem' height='64px' />
                <p className='draw__order__item--additive'>4. Akcelerátor srážení s gelem</p>
                <p className='draw__order__item--example'>Biochemie</p>
            </div>  
            
            <div className='draw__order__item'>
                <img src={IMG_pli} alt='Statim - Lithium heparin' height='64px' />
                <p className='draw__order__item--additive'>5. Lithium heparin</p>
                <p className='draw__order__item--example'>Statim, hsTnI, NT-proBNP</p>
            </div>  

            <div className='draw__order__item'>
                <img src={IMG_edta} alt='KO, amoniak, laktát, homocystein - K2EDTA' height='64px' />
                <p className='draw__order__item--additive'>6. K2EDTA</p>
                <p className='draw__order__item--example'>KO, amoniak, laktát, homocystein</p>
            </div>  

            <div className='draw__order__item'>
                <img src={IMG_naf} alt='Glykemie - K2EDTA, NaF' height='64px' />
                <p className='draw__order__item--additive'>7. K2EDTA, NaF</p>
                <p className='draw__order__item--example'>Glykemie</p>
            </div>  
        </div>
    </div>
);

export default DrawOrder;