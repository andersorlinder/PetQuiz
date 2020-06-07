import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { QuizGame } from './QuizGame';

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { QnAs: [], shuffledAnswers: [], answerstatus: '', isLoaded: false, QNr: 0, score: 0, buttonClicked: false, buttonInactive: false};
        this.getQuestions = this.getQuestions.bind(this);
        this.onAnswerClick = this.onAnswerClick.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
    }

    async componentDidMount() {
        if (!this.state.isLoaded) {
            await this.getQuestions()
            
            this.setState({
                isLoaded: true
            });
        }
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
        });
        this.getShuffledAnswers()
        console.log(this.state.QnAs[0]);
        console.log(this.state.shuffledAnswers);
    }

    getShuffledAnswers() {
        console.log(this.state.QnAs);
        var array = [this.state.QnAs[this.state.QNr].CorrectAnswer, this.state.QnAs[this.state.QNr].WrongAnswerOne, this.state.QnAs[this.state.QNr].WrongAnswerTwo];
        if (this.state.buttonInactive) {
            this.shuffleArray(array);
        }
        this.setState({
            shuffledAnswers: array,
        });
    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        this.setState({
            
        });
        console.log(this.state.shuffledAnswers);
    }

    renderButtons = () => {
        return (
            <div>
                <h1 >{this.state.QnAs[this.state.QNr].Question}</h1>
                <div>
                    <Button color="primary" size="lg" onClick={this.onAnswerClick} disabled={this.state.buttonInactive} >{this.state.shuffledAnswers[0]}</Button>
                    <Button color="primary" size="lg" onClick={this.onAnswerClick} disabled={this.state.buttonInactive} >{this.state.shuffledAnswers[1]}</Button>
                    <Button color="primary" size="lg" onClick={this.onAnswerClick} disabled={this.state.buttonInactive} >{this.state.shuffledAnswers[2]}</Button>
                </div>
                <Button onClick={this.onNextClick}>Next Question</Button>
                <p>{this.state.answer}</p>
            </div>);
    }

    onAnswerClick(e) {
        if (e.target.innerText === this.state.QnAs[this.state.QNr].CorrectAnswer) {
            this.setState({
                buttonInactive: true,
                score: this.state.score,
                answerstatus: 'Korrekt!'
            });
        } else {
            this.setState({
                buttonInactive: true,
                answerstatus: 'Fel svar!'
            })
        }
    }

    onNextClick() {

        if (this.state.QNr >= 5) {
            this.props.onClick(this.state.score, false);
        } else {

            this.setState({
                isLoaded: false,
                QNr: this.state.QNr + 1,
                answerstatus: ''
            });
            this.getShuffledAnswers();
            this.setState({
                isLoaded: true,
                buttonInactive: false
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.isLoaded ?
                    <p>Loading...</p> :
                    this.renderButtons()
                }
            </div>
        );
    }
}