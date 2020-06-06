import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Question } from './Question';


export class QuizGame extends Component {

    constructor(props) {
        super(props);
        this.state = { QnAs: [], isLoaded: false };
        this.getQuestions = this.getQuestions.bind(this);
    }

    componentDidMount() {
        if (!this.state.isLoaded)
            this.getQuestions();
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

        const QnAs = eval(QnAResponse);
        this.setState({
            QnAs,
            isLoaded: true
        });
    }

    static fetchFailure(err) {
        console.log(err);
    }

    render() {
        return (
            <div>
                {!this.state.isLoaded ?
                    <p className="color--pale">Loading...</p> :
                    <Question question={this.state.QnAs[0]} />
                    
                }
             <h1>The game is playing!</h1>
            </div>
        );
    }
}
