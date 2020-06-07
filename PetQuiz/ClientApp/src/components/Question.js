import React, { Component } from 'react';
import { Button} from 'reactstrap';

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { QnAs: [], question: '', shuffledAnswers: [], answerstatus: '', isLoaded: false, QNr: 0, score: 0, buttonInactive: false };
        this.renderButtons = this.renderButtons.bind(this);
        this.onAnswerClick = this.onAnswerClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
    }

    async componentDidMount() {
        if (!this.state.isLoaded) {
            await this.getQuestions()

            this.setState({ 
                isLoaded: true,
                question: this.state.QnAs[0].Question
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
            QnAs
        });
        this.getShuffledAnswers()
    }

    getShuffledAnswers() {
        var array = [this.state.QnAs[this.state.QNr].CorrectAnswer, this.state.QnAs[this.state.QNr].WrongAnswerOne, this.state.QnAs[this.state.QNr].WrongAnswerTwo];
        this.shuffleArray(array);
        this.setState({
            shuffledAnswers: array
        });

    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    renderButtons = () => {
        return (
            <div>
                <h1 >{this.state.question}</h1>
                <div>
                    <Button color="primary" size="lg" onClick={this.onAnswerClick} disabled={this.state.buttonInactive} >{this.state.shuffledAnswers[0]}</Button>
                    <Button color="primary" size="lg" onClick={this.onAnswerClick} disabled={this.state.buttonInactive} >{this.state.shuffledAnswers[1]}</Button>
                    <Button color="primary" size="lg" onClick={this.onAnswerClick} disabled={this.state.buttonInactive} >{this.state.shuffledAnswers[2]}</Button>
                </div>
                <Button onClick={this.onNextClick} disabled={!this.state.buttonInactive}>Next Question</Button>
                <p>{this.state.answerstatus}</p>
            </div>);
    }

    onAnswerClick(e) {
        if (e.target.innerText === this.state.QnAs[this.state.QNr].CorrectAnswer) {
            this.setState({
                buttonInactive: true,
                score: this.state.score + 1,
                QNr: this.state.QNr + 1,
                answerstatus: 'Korrekt!'
            });
        } else {
            this.setState({
                buttonInactive: true,
                QNr: this.state.QNr + 1,
                answerstatus: 'Fel svar!'
            })
        }
    }

    onNextClick() {
        if (this.state.QNr >= 5) {
            this.props.onClick(this.state.score, false);
            this.setState({
                isLoaded: false,
                answerstatus: '',
                QnAs: [],
                QNr: 0,
                score: 0,
                shuffledAnswers: [],
                buttonInactive: false
            });
            return;
        } else {
            this.setState({
                isLoaded: false,
                answerstatus: '',
                question: this.state.QnAs[this.state.QNr].Question
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
                    <p>Loading1...</p> :
                    this.renderButtons()
                }
            </div>
        );
    }
}