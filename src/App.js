import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        username: 'Edgars'
    }

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
        <div className="App">
            <UserInput change={this.usernameChangeHandler} />
            <UserOutput username={this.state.username} />
        </div>
        );
    }
}

export default App;