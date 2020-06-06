import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { QuizGame } from './QuizGame';

export class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }


    render() {
        return (
            <div>
                <h1>This is a question</h1>
                <Button>This is an answer</Button>
                <Button>This is another answer</Button>
                <Button>This is another answer</Button>;
            </div>
        );
    }
}