import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export class GameScore extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Resultat</h1>
                <p>Din score blev {this.props.score} av 5!</p>
                
            </div>
        );
    }
}
