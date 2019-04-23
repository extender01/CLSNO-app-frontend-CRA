import React from 'react';
import {Link} from 'react-router-dom';



import IMG_sg from '../../../../images/forDepartments/drawsystem/image011.jpg';
import IMG_se from '../../../../images/forDepartments/drawsystem/image013.jpg';
import IMG_pli from '../../../../images/forDepartments/drawsystem/image017.jpg';
import IMG_gly from '../../../../images/forDepartments/drawsystem/image021.jpg';
import IMG_edta from '../../../../images/forDepartments/drawsystem/image024.jpg';
import IMG_naf from '../../../../images/forDepartments/drawsystem/image027.jpg';
import IMG_sed from '../../../../images/forDepartments/drawsystem/image029.jpg';
import IMG_mikroedta from '../../../../images/forDepartments/drawsystem/image044.jpg';
import IMG_cap from '../../../../images/forDepartments/drawsystem/image032.jpg';
import IMG_syringe from '../../../../images/forDepartments/drawsystem/image042.jpg';
import IMG_urine from '../../../../images/forDepartments/drawsystem/image035.jpg';
import IMG_csf from '../../../../images/forDepartments/drawsystem/image039.jpg';
import IMG_fob from '../../../../images/forDepartments/drawsystem/image041.jpg';


const imgPath = '../../../../images/forDepartments/drawsystem/'

const DrawSystem = () => (
    <div  className='container__white'>

        <div className='draw__system'>
            <h1>Odběrový materiál používaný v OKB</h1>
            <p>V centrálních laboratořích SNO se používají převážně zkumavky Vacutest Kima. Popis jednotlivých typů zkumavek naleznete v tabulce níže. V sekci <Link to='/metody'>METODY</Link> naleznete inormaci o vhodné odběrové zkumavce ke každému vyšetření.</p>
            <div className='draw__system__item'>
                <p>Obrázek</p>
                <p>Zkumavka / barva víčka</p>
                <p>Typ krve / materiálu</p>
                <p>Popis / Aditiva</p>
                <p>Použití</p>
            </div>
            <div className='draw__system__item'>
                <img src={IMG_sg} width='200px' alt='Gel / SiO2 (akcelerátor srážení)' />
                <p>Zlatá</p>
                <p>Srážlivá žilní</p>
                <p>Gel / SiO2 (akcelerátor srážení)</p>
                <p>Biochemická, sérologická vyšetření</p>

            </div>
            <div className='draw__system__item'>
                <img src={IMG_se} width='200px' alt='SiO2 (akcelerátor srážení)'/>
                <p>Červená</p>
                <p>Srážlivá žilní</p>
                <p>SiO2 (akcelerátor srážení)</p>
                <p>Analýza hormonů, vitaminů, nádorových markerů</p>
            </div>     
            <div className='draw__system__item'>
                <img src={IMG_pli} width='200px' alt='Gel / Heparinát lipný' />
                <p>Světle zelená</p>
                <p>Nesrážlivá žilní</p>
                <p>Gel / Heparinát lipný</p>
                <p>Statimová vyšetření, dialyzovaní, heparinizovaní pacienti, hsTnI, NT-proBNP</p>
            </div>  
            <div className='draw__system__item'>
                <img src={IMG_gly} width='200px' alt='1 ml glukózového roztoku + kapilára (dodá laboratoř)' />
                <p>Zkumavka Eppendorf</p>
                <p>Srážlivá žilní</p>
                <p>1 ml glukózového roztoku + kapilára (dodá laboratoř)</p>
                <p>Kapilární glykémie</p>
            </div>              
            <div className='draw__system__item'>
                <img src={IMG_edta} width='200px' alt='K2EDTA' />
                <p>Fialová</p>
                <p>Nesrážlivá žilní</p>
                <p>K2EDTA</p>
                <p>Amoniak, laktát, homocystein, glykovaný hemoglobin</p>
            </div>              
            <div className='draw__system__item'>
                <img src={IMG_naf} width='200px' alt='K2EDTA nebo K3EDTA + NaF (inhibitor glykolýzy)' />
                <p>Šedá</p>
                <p>Nesrážlivá žilní</p>
                <p>K2EDTA nebo K3EDTA + NaF (inhibitor glykolýzy)</p>
                <p>Glykémie</p>
            </div>   
            <div className='draw__system__item'>
                <img src={IMG_sed} width='200px' alt='Sedimentace' />
                <p>Černá</p>
                <p>Nesrážlivá žilní</p>
                <p>citrát 1:4</p>
                <p>Sedimentace</p>
            </div>        
            <div className='draw__system__item'>
                <img src={IMG_mikroedta} width='200px' alt='Glykovaný hemoglobin' />
                <p>Fialová</p>
                <p>Nesrážlivá žilní</p>
                <p>Mikrozkumavka K2EDTA</p>
                <p>Glykovaný hemoglobin</p>
            </div> 
            <div className='draw__system__item'>
                <img src={IMG_cap} width='200px' alt='kapilara' />
                <p>Kapilára 100 ul</p>
                <p>Nesrážlivá kapilární</p>
                <p>Heparinát sodný</p>
                <p>ABR, COHb, MetHb, iCa</p>
            </div>              
            <div className='draw__system__item'>
                <img src={IMG_syringe} width='200px' alt='Radiometer stříkačka'/>
                <p>Radiometer stříkačka</p>
                <p>Nesrážlivá arteriální / žilní</p>
                <p>Heparinát lipný</p>
                <p>ABR, COHb, Mepb, iCa</p>
            </div>                           
            <div className='draw__system__item'>
                <img src={IMG_urine} width='200px' alt='Odběr moče' />
                <p>Žlutá / kónické dno</p>
                <p>Odběr moče</p>
                <p>Bez úprav</p>
                <p>Vyšetření chemicky + sediment</p>
            </div>   
            <div className='draw__system__item'>
                <img src={IMG_urine} width='200px' alt='Sdběr moče' />
                <p>Žlutá / kónické dno</p>
                <p>Sdběr moče</p>
                <p>Bez úprav</p>
                <p>Biochemická analýza moče</p>
            </div>  
            <div className='draw__system__item'>
                <img src={IMG_urine} width='200px' alt='Punktát' />
                <p>Žlutá / kónické dno</p>
                <p>Punktát</p>
                <p>Bez úprav</p>
                <p>Biochemická analýza punktátu</p>
            </div>          
            <div className='draw__system__item'>
                <img src={IMG_csf} width='200px' alt='Odběr likvoru' />
                <p>Červená</p>
                <p>Odběr likvoru</p>
                <p>Sterilní, bez úprav</p>
                <p>Základní biochemická analýza likvoru</p>
            </div>              
            <div className='draw__system__item'>
                <img src={IMG_fob} width='200px' alt='Odběr stolice' />
                <p>Zkumavka na okultní krvácení</p>
                <p>Odběr stolice</p>
                <p>Bez úprav</p>
                <p>Vyšetření stolice na okultní krvácení</p>
            </div>  
        </div>
    </div>
);

export default DrawSystem;