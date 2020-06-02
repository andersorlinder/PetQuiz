import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Login } from './Login'

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', loggedIn: false}

    }

    render() {
        return (
            <div>
                {this.state.loggedIn ? <p>You're logged in!</p> : <Login />}
            </div>
        );
    }
}