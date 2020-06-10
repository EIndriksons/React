import React from 'react';

const Char = (props) => {
    return (
        <p className="Char" onClick={props.delete}>{props.char}</p>
    )
}

export default Char;