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

{/* <ol>
<li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
<li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
<li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
<li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
<li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
<li>When you click a CharComponent, it should be removed from the entered text.</li>
</ol>
<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}