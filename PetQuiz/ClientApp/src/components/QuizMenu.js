import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {QuizGame} from './QuizGame'

export class QuizMenu extends Component {
    static displayName = QuizMenu.name;

    constructor(props) {
        super(props);
        this.state = { QnAs: [], isPlayingQuiz: false };
        this.handleLogOut = this.handleLogOut.bind(this);
        this.setPlayState = this.setPlayState.bind(this);
    }

    handleLogoutSubmit = (e) => {
        e.preventDefault();
        this.logout();
    }

    handleLogOut() {
        this.props.onClick(false);
    }

    setPlayState() {
        console.log(this.state.isPlayingQuiz);
        this.setState({
            isPlayingQuiz: true
        });
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

    

    content = () => {
        if (this.isPlayingQuiz) {
            return (
                <QuizGame username={this.props.username} />
            );
        } else {
            return (
                <div>
                    <Button outline color="primary" size="lg" onClick={this.setPlayState}>Play</Button>
                    <Button outline color="info" size="lg">Highscore</Button>
                    <Button outline color="danger" size="lg" onClick={this.handleLogoutSubmit}>Log out</Button>
                </div>
            );
        }
    }

    render() {          
        return (
            <div>
                {this.content()}
            </div>
        );
    }
}