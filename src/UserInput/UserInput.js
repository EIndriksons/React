import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            Username: <input type="text" onChange={props.change} value={props.username}></input>
        </div>
    )
}

export default UserInput;