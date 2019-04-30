import React from 'react';
import PropTypes from 'prop-types';

import IMG_krnov from '../../../../images/krnov.png';
import IMG_agel from '../../../../images/agel.png';
import IMG_fno from '../../../../images/fno.png';

const Where = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>KAM TO JEDE</h4>
        <div>
            {props.where==='Krnov' ? <img src={IMG_krnov} alt='Krnov' /> : undefined}
            {props.where==='Nový Jičín' ? <img src={IMG_agel} alt='Agel' /> : undefined}
            {props.where==='FN Ostrava' ? <img src={IMG_fno} alt='FNO' /> : undefined}
            <p>{props.where}</p>
        </div>
    </div>
);


Where.propTypes = {
    where: PropTypes.string,
    classNames: PropTypes.string
};

export default Where;