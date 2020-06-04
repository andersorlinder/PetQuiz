import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Login } from './Login';
import { Register } from './Register';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', loggedIn: false}

    }

    render() {
        return (
            <div>
                <Login />
                <Register />
            </div>
        );
    }
}