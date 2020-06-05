import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Game extends Component {
    static displayName = Game.name;

    constructor(props) {
        super(props);
        this.state = {};
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

    render() {

        return (
            <div>
                <button outline color="primary" size="lg">Play</button>
                <button outline color="info" size="lg">Highscore</button>
                <button outline color="danger" onClick={this.handleLogoutSubmit}>Log out</button>
            </div>
        );
    }
}