import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Question } from './Question';
import { GameScore } from './GameScore'


export class QuizGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            QnAs: [], currentQuestion: {}, isLoaded: false, QNr: 0, score: 0 };
        this.getQuestions = this.getQuestions.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
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
            currentQuestion: QnAs[0],
            isLoaded: true
        });
        console.log(this.state.isLoaded);
    }

    onClickHandler(qScore) {
        this.setState({
            isLoaded: false,
            QNr: this.state.QNr++,
            score: this.state.score + qScore,
            currentQuestion: this.state.QnAs[this.state.QNr]
        });
        this.setState({
            isLoaded: true
        });
    }

    static fetchFailure(err) {
        console.log(err);
    }

    renderQuestion = () => {
        return <Question QnA={this.state.currentQuestion} onClick={this.onClickHandler} />;
    }

    render() {
        return (
            <div>
                {!this.state.isLoaded ?
                    <p className="color--pale">Loading1...</p> :
                    this.state.QNr < 5 ?
                        this.renderQuestion() :
                        <GameScore  />
                }
            </div>
        );
    }
}
