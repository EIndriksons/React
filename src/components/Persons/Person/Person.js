import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <React.Fragment>
                <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="2">{this.props.children}</p>
                <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        );
    }
};

export default withClass(Person, classes.Person);