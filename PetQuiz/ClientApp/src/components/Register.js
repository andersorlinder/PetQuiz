import React, { Component } from 'react';

export class Register extends Component {
    static displayName = Register.name;

    constructor(props) {
        super(props);
        this.state = { nickname: '', username: '', password: ''}

    }

    render() {
        return (
            <div>
                <label>Nick name</label>
                <input type="text" value={this.state.nickname} />
                <br />
                <br />
                <label>User name</label>
                <input type="text" value={this.state.username} />
                <br />
                <br />
                <label>Password</label>
                <input type="text" value={this.state.password} />
                <br />
                <br />
                <input type="submit">Log in</input>
                <br />
                <br />
                <a>Create account</a>
            </div>
        );
    }
}