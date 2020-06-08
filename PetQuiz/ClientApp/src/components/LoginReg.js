import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class LoginReg extends Component {
    static displayName = LoginReg.name;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.login();
    }

    handleRegisterSubmit = (e) => {
        e.preventDefault();
        this.register();
    }

    handleLogIn() {
        this.props.onSubmit(true, this.state.username);
    }


    async login() {
        const loginResponse = await fetch('https://localhost:5001/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ Email: this.state.username, Password: this.state.password })
        });
        if (loginResponse.status === 200) {
            this.handleLogIn()
        }
    }

    async register() {
        const registerResponse = await fetch('https://localhost:5001/register', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ Email: this.state.username, Password: this.state.password })
        });
        if (registerResponse.status === 200) {
            this.login();
        }
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" onChange={this.onUsernameChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" onChange={this.onPasswordChange} required/>
                </FormGroup>
                <Button onClick={this.handleLoginSubmit}>Log in</Button>
                <Button onClick={this.handleRegisterSubmit}>Register</Button>
            </Form>
        );
    }
}