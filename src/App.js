import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { id: 0, name: "Max", age: 28 },
            { id: 1, name: "Manu", age: 29 },
            { id: 2, name: "Stephanie", age: 26 },
        ],
        otherState: 'some other value',
        showPersons: false,
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex] // use this to generate new array instead of getting a pointer
        }

        // or use this instead of above
        // const person = Object.assign({}, this.state.persons[personIndex])

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]; // use this to generate new array instead of getting a pointer
                                                 // best practice is to generate actual copy, change it and then update state
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
        <div className={classes.App}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                alt={this.state.showPersons}
                onClick={this.togglePersonsHandler}
            >Switch Name
            </button>
            {persons}
        </div>
        );
    }
}

export default App;