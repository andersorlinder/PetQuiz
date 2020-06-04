import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Login } from './Login';
import { Register } from './Register';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', loggedIn: false }
        this.changeLoggedIn = this.changeLoggedIn.bind(this);
    }
    changeLoggedIn() {
        this.setState({
            loggedIn: true
        });
    }

    render() {
        const loggedIn = this.state.loggedIn;
        let greeting;
        let button;
        let login;
        let register;
        if (loggedIn) {
            greeting = <h1>Welcome to the game!</h1>
            button = <button>Play game</button>
        } else {
           login = <Login loggedIn={this.state.loggedIn} onSubmit={this.changeLoggedIn} />
            register = <Register />
        }
        return (
            <div>
                {login}
                {register}
                {greeting}
                {button}
            </div>

        );
    }
}