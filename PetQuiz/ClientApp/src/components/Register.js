import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Register extends Component {
    static displayName = Register.name;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    //onNicknameChange = (e) => {
    //    this.setState({ nickname: e.target.value });
    //}

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    

    //componentDidMount() {
    //    this.login();
    //}

    

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" onChange={this.onUsernameChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" onChange={this.onPasswordChange} required />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}