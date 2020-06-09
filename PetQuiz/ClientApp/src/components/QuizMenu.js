import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {  QuizGame  } from './QuizGame';
import { Highscore } from './Highscore';

export class QuizMenu extends Component {
    static displayName = QuizMenu.name;

    constructor(props) {
        super(props);
        this.state = {
            QnAs: [],
            isLoading: true,
            switchMenuState: true
        };
        this.handleLogOut = this.handleLogOut.bind(this);
        this.setPlayState = this.setPlayState.bind(this);
        this.setHighScoreState = this.setHighScoreState.bind(this)
        this.backToMenu = this.backToMenu.bind(this)
    }

    handleLogoutSubmit = (e) => {
        e.preventDefault();
        this.logout();
    }

    handleLogOut() {
        this.props.onClick(false);
    }

    backToMenu() {
        this.setState({
            isLoading: true
        });
    }

    setPlayState() {
        this.setState({
            switchMenuState: true,
            isLoading: false
        });
    }

    setHighScoreState() {
        this.setState({
            switchMenuState: false,
            isLoading: false
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
        return (
            <div>
                <h1>Välkommen!</h1>
                <h3>{this.props.username}</h3>
                <Button outline color="primary" size="lg" onClick={this.setPlayState}>Spela</Button>
                <Button outline color="info" size="lg" onClick={this.setHighScoreState}>Highscore</Button>
                <Button outline color="danger" size="lg" onClick={this.handleLogoutSubmit}>Logga ut</Button>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.isLoading ?
                    this.content() :
                    this.state.switchMenuState ?
                        <QuizGame username={this.props.username} toMenu={this.backToMenu}/> :
                        <Highscore toMenu={this.backToMenu}/>
                }
            </div>
        );
    }
}