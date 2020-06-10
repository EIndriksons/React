import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        text: '',
    }

    changeListener = (event) => {
        this.setState({text: event.target.value})
    }

    deleteChar = (index) => {
        const text = this.state.text.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({text: updatedText})
    }

    render() {
        let chars = (
            <div>
                {this.state.text.split('').map((char, index) => {
                    return <Char
                        char={char}
                        delete={() => this.deleteChar(index)}
                        key={index} />
                })}
            </div>
        )

        return (
        <div className="App">
            <h1>Please enter the text:</h1>
            <input type="text" onChange={this.changeListener} value={this.state.text} />
            <p>Length of the text: {this.state.text.length}</p>
            <Validation length={this.state.text.length} />
            {chars}
        </div>
        );
    }
}

export default App;