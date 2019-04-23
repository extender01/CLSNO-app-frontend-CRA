import React from 'react';


import IMG_pavilon from '../../images/landing/pavU.jpg';
import IMG_clab1 from '../../images/landing/cl1.jpg';
import IMG_clab2 from '../../images/landing/cl2.jpg';
import IMG_bch1 from '../../images/landing/bch1.jpg';
import IMG_bch2 from '../../images/landing/bch2.jpg';
import IMG_bch3 from '../../images/landing/bch3.jpg';
import IMG_hem1 from '../../images/landing/hem1.jpg';
import IMG_hem2 from '../../images/landing/hem2.jpg';
import IMG_hem3 from '../../images/landing/hem3.jpg';
import IMG_ria1 from '../../images/landing/ria1.jpg';
import IMG_ria2 from '../../images/landing/ria2.jpg';
import IMG_ria3 from '../../images/landing/ria3.jpg';



const Departments = () => (
    <div className='container__white container__departments'>
        <div  id='o-laboratori' className='departments'>
            <div className='departments__item'>
                <h3>CENTRÁLNÍ LABORATOŘE</h3>
                <p>Centrální laboratoře provedou ročně kolem 1 250 000 analýz z palety více než 250 různých metod. Tyto výsledky poskytují důležité informace lékařům ostatních medicínských oborů, nutné ke stanovení diagnózy, léčbě a sledování průběhů nemocí.</p>
                <div className='departments__item__images'>
                    <img src={IMG_pavilon} alt='Celtrální laboratoře - pavilon U' />
                    <img src={IMG_clab1} alt='Celtrální laboratoře SNO' />
                    <img src={IMG_clab2} alt='Celtrální laboratoře SNO' /> 
                </div>
            </div>

            <div className='departments__item'>
                <h3>ÚSEK BIOCHEMIE</h3>
                <p>V non-stop režimu provádí vyšetření základních biochemických parametrů, parametrů vnitřního prostředí, kardiomarkerů, specifických proteinů, funkční testy, vyšetření moče, močových konkrementů a další. </p>
                <div className='departments__item__images'>
                    <img src={IMG_bch1} alt='Celtrální laboratoře SNO - biochemie' />
                    <img src={IMG_bch2} alt='Celtrální laboratoře SNO - biochemie' />
                    <img src={IMG_bch3} alt='Celtrální laboratoře SNO - biochemie' />
                </div>
            </div>

            <div className='departments__item'>
                <h3>ÚSEK HEMATOLOGIE</h3>
                <p>Provádí vyšetření krevních obrazů včetně diferenciálního počtu, krevních nátěrů, nátěrů kostní dřeně, vyšetření koagulačních parametrů a další.</p>
                <div className='departments__item__images'>
                    <img src={IMG_hem1} alt='Celtrální laboratoře SNO - hematologie' />
                    <img src={IMG_hem2} alt='Celtrální laboratoře SNO - hematologie' />
                    <img src={IMG_hem3} alt='Celtrální laboratoře SNO - hematologie' />
                </div>
            </div>

            <div className='departments__item'>
                <h3>ÚSEK RADIOIMUNOANALÝZY</h3>
                <p>Provádí vyšetření nádorových markerů, hormonů, vitaminů a další.</p>
                <div className='departments__item__images'>
                    <img src={IMG_ria1}  alt='Celtrální laboratoře SNO - RIA' />
                    <img src={IMG_ria2}  alt='Celtrální laboratoře SNO - RIA' />
                    <img src={IMG_ria3}  alt='Celtrální laboratoře SNO - RIA' />
                </div>
            </div>
        </div>
    </div>
);

export default Departments;