import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import PropTypes from 'prop-types';

//nested destructuring
const LabMetFilterTrigger = (props) => (
    <div className='lm__collapsible__filters__heading'>
        <p>{props.heading}</p>
        <FontAwesomeIcon icon={props.icon} rotation={props.rotation}   />

    </div>
);


// LabMetFilterTrigger.propTypes = {
    
//     }) 
// };

export default LabMetFilterTrigger;  