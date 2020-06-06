import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class QuizMenu extends Component {
    static displayName = QuizMenu.name;

    constructor(props) {
        super(props);
        this.state = { };
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogoutSubmit = (e) => {
        e.preventDefault();
        this.logout();
    }

    handleLogOut() {
        this.props.onClick(false);
    }

    async logout() {
        const logoutResponse = await fetch('https://localhost:5001/logout', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        });
        if (logoutResponse.status === 200) {
            this.handleLogOut();
        }
    }

    async getQuestions() {
        const QnAResponse = await fetch('https://localhost:5001/getqna', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        })
            .then(response => response.json())
            .catch(err => this.fetchFailure(err));

        const json = eval(QnAResponse);
        console.log(json[1].Question); //Debug testing
    }

    static fetchFailure(err) {
        console.log(err);
    }

    render() {

        return (
            <div>
                <Button outline color="primary" size="lg" onClick={this.getQuestions} > Play</Button>
                <Button outline color="info" size="lg">Highscore</Button>
                <Button outline color="danger" size="lg" onClick={this.handleLogoutSubmit}>Log out</Button>
            </div>
        );
    }
}