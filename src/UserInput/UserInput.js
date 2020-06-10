import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            Username: <input type="text" onChange={props.change}></input>
        </div>
    )
}

export default UserInput;