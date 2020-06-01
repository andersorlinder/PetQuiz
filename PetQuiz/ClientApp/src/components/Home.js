import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {username: '', }

    }

    render() {
        return (
            <div>
                <label>User name</label>
                <input type="text" value={this.state.username} />
                <br />
                <br />
                <label>Password</label>
                <input type="text" value={this.state.password/>
                <br />
                <br />
                <button>Log in</button>
                <br />
                <br />
                <a>Create account</a>
            </div>
        );
    }
}
