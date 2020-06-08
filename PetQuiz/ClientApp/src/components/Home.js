import React, { Component } from 'react';
//import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { LoginReg } from './LoginReg';
import { QuizMenu } from './QuizMenu';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', loggedIn: false }
        this.changeLoggedIn = this.changeLoggedIn.bind(this);
    }

    changeLoggedIn(status, username) {
        this.setState({
            loggedIn: status,
            username
        });
    }

    render() {
        const loggedIn = this.state.loggedIn;
        let greeting;
        let login;
        if (loggedIn) {
            greeting = <QuizMenu loggedIn={this.state.loggedIn} onClick={this.changeLoggedIn} username={this.state.username} />;
            
        } else {
            login = <LoginReg loggedIn={this.state.loggedIn} onSubmit={this.changeLoggedIn} />;
        }
        return (
            <div>
                {login}
                {greeting}
            </div>
        );
    }
}