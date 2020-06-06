import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export class GameScore extends Component {

    constructor(props) {
        super(props);
        this.state = { question: '', correctAnswer: '', wrongAnswerOne: '', wrongAnswerTwo: '' };
    }

    render() {
        return (
            <div>
                <h1>Hej</h1>
            </div>
        );
    }
}
