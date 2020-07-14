import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 0, name: "Max", age: 28 },
            { id: 1, name: "Manu", age: 29 },
            { id: 2, name: "Stephanie", age: 26 },
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentWillMount() {
        console.log('[App.js] componentWillMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            };
        });
    };

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

        console.log('[App.js] render');

        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />;
        }

        return (
        <Aux>
            <button onClick={() => {this.setState({showCockpit: false});}}>Remove Cockpit</button>
            {this.state.showCockpit ? (
                <Cockpit
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler} />
            ) : null}
            {persons}
        </Aux>
        );
    }
}

export default withClass(App, classes.App);