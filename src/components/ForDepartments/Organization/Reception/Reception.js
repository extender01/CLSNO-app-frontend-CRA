import React from 'react';

import IMG_receptionIcon from '../../../../images/forDepartments/about/icons/request_icon2.svg';
import IMG_receptionTimetable from '../../../../images/forDepartments/about/reception2.jpg';
import IMG_stamp from '../../../../images/forDepartments/about/icons/stamp.svg';

const Reception = () => (
    <div className='container__white'>
        <div className='reception'>
            <h2>Časový rozpis příjmu materiálu</h2>
            <p>Zde najdete časový harmonogram příjmu materiálu jednotlivých úseků. Věnujte pozornost hlavně rozdělení příjmu hematologického úseku mezi pavilony U a C, který je znározněn na plánku níže spolu s biochemickým příjmem (oranžově biochemie a fialově hematologie). Ostatní úseky zpracovávají materiál pouze v rutinním provozu v pracovní dny.</p>

            <div className='general__line'>
                <div className='reception__card'>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan='2'>Hematologie</th>
                            </tr>

                            <tr>
                                <td className='reception__center' colSpan='2'>Pracovni dny</td>
                            </tr>

                            <tr>
                                <td>RUTINA</td>
                                <td>POHOTOVOST</td>
                            </tr>

                            <tr>
                                <td>6:30 - 15:30 pav U</td>
                                <td>15:30 - 18:00 pav U</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>18:00 - 6:30 pav C</td>
                            </tr>

                            <tr>
                                <td  className='reception__center' colSpan='2'>Vikendy a svatky</td>
                            </tr>

                            <tr>
                                <td>-</td>
                                <td>7:00 - 11:30 pav U</td>
                            </tr>

                            <tr>
                                <td>-</td>
                                <td>11:30 - 7:00 pav C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='reception__card'>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan='2'>Biochemie</th>
                            </tr>

                            <tr>
                                <td className='reception__center' colSpan='2'>Pracovni dny</td>
                            </tr>

                            <tr>
                                <td>RUTINA</td>
                                <td>POHOTOVOST</td>
                            </tr>

                            <tr>
                                <td>6:30 - 15:00 pav U</td>
                                <td>15:00 - 6:30 pav U</td>
                            </tr>

                            <tr>
                                <td  className='reception__center' colSpan='2'>Vikendy a svatky</td>
                            </tr>

                            <tr>
                                <td>-</td>
                                <td>non-stop pav U</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <div className='general__line'>
                <div className='reception__card reception__card--small'>
                    <h3>Radioimunochemie (RIA)</h3>
                    <p>Pracovni dny</p>
                    <p>7:00 - 15:00</p>
                    <p>Materiál přijatý po 13:30 bude zpracován následující pracovní den.</p>
                </div>

                <div className='reception__card reception__card--small'>
                    <h3>Imunologie</h3>
                    <p>Pracovni dny</p>
                    <p>7:00 - 15:00</p>
                    <p>Materiál přijatý po 13:30 bude zpracován následující pracovní den.</p>

                </div>

                <div className='reception__card reception__card--small'>
                    <h3>Infekční sérologie</h3>
                    <p>Pracovni dny</p>
                    <p>7:00 - 15:00</p>
                    <p>Materiál přijatý po 13:30 bude zpracován následující pracovní den. <span className='asterisk'>*</span></p>

                </div>

            </div>

            <p><span className='asterisk'>*</span>Metoda HBsAg je dostupná i v době pohotovosti v režimu statim 24h denně, ostatní hepatitidy pouze po telefonické domluvě s VŠ. V případě požadavku na hepatitidy v době pohotovosti bude výsledek vydán bez hodnocení VŠ imunologa.</p>

            <div className='reception__plan'>
                <h3>Časový plán příjmu biochemie a hematologie na pavilonech U a C</h3>

                <div className='reception__image'>
                    <img src={IMG_receptionTimetable} alt='Časový plán příjmu biochemie a hematologie na pavilonech U a C' />
                </div>
            
            </div>

            <div className='reception__notes'>
                <h3>Důležité poznámky</h3>

                <div className='general__line-center'>
                    <div className='reception__icon'>
                        <img src={IMG_receptionIcon} alt='V době pohotovosti biochemické a hematologické žádanky zvlášť' />
                    </div>

                    <p className='reception__textForIcon'>V době pohotovosti je potřeba psát biochemické a hematologické žádanky zvlášť</p>
                </div>

                <div className='general__line-center'>
                    <div className='reception__icon'>
                        <img src={IMG_stamp} alt='Na externích žádankách je potřeba razítko oddělení' />
                    </div>

                    <p className='reception__textForIcon'>Na žádankách na externí vyšetření musí být razítko oddělení včetně</p>
                </div>            
            </div>
        </div>
    </div>
);

export default Reception;


