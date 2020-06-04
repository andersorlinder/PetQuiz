import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Login extends Component {
    static displayName = Login.name;

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.login();
        alert("Congrats, you're submit button is working!");
        
    }

    handleLogIn() {
        const isLoggedIn = true;
        this.props.onSubmit(isLoggedIn);
    }

    //componentDidMount() {
    //    this.login();
    //}

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
        console.log(loginResponse);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" onChange={this.onUsernameChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" onChange={this.onPasswordChange} required/>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}