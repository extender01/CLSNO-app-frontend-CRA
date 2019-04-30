import React from 'react';
import RequestItem from './RequestItem';
import data from '../../../../data/request/request.json';

import IMG_checked from '../../../../images/checked_green.svg';
import IMG_error from '../../../../images/cross_red.svg'

const Request = () => (
    <div className='container__blue'>
        <div className='request'>
            <h1>ŽÁDANKY</h1>
            <p>Žádanky z nemocničních ambulancí a oddělení jsou tištěny v NIS Akord</p>
            <p>Žádanky pro externí žadatele dodá na požádání CL nebo jsou volně ke stažení ZDE</p>

            <div className='request__items'>
                <RequestItem info={data.request[0]} image={IMG_checked} />
                <RequestItem info={data.request[1]} image={IMG_checked} />
                <RequestItem info={data.request[2]} image={IMG_checked} />
                <RequestItem info={data.request[3]} image={IMG_error} />
            </div>
        </div>
    </div>
);

export default Request;