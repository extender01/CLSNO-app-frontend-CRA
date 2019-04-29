import React from 'react';
import PropTypes from 'prop-types';
import IMG_error from '../../../../images/cross.svg';
import IMG_checked from '../../../../images/checked.svg';

const GenericIcon = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>{props.label}</h4>
        {/* isAvailable is boolean or string (if empty string then value is falsy*/}
        {props.isAvailable ?
            <img src={IMG_checked} height='20px' /> 
            :
            <img src={IMG_error} height='20px' />

        }
        {props.label === 'RUTINA' ? <p>5h</p> : <p>{props.value}</p>}
    </div>
);

GenericIcon.propTypes = {
    classNames: PropTypes.string,
    label: PropTypes.string,
    isAvailable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    value: PropTypes.string
};

export default GenericIcon;