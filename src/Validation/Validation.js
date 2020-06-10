import React from 'react';

const Validation = (props) => {
    const length = props.length;
    const min_length = 10;

    if (length >= min_length) {
        return (
            <React.Fragment><p className="ValidationComponent valid">Text long enough</p></React.Fragment>
        )
    } else {
        return (
            <React.Fragment><p className="ValidationComponent invalid">Text too short</p></React.Fragment>
        )
    }
}

export default Validation;