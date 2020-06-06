import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { QuizGame } from './QuizGame';

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, question: '', correctAnswer: '', wrongAnswerOne: '', wrongAnswerTwo: '' };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount() {
        if (!this.state.isLoaded) {
            this.setState({
                question: this.props.QnA.Question,
                correctAnswer: this.props.QnA.CorrectAnswer,
                wrongAnswerOne: this.props.QnA.WrongAnswerOne,
                wrongAnswerTwo: this.props.QnA.WrongAnswerTwo
            })
            this.setState({ isLoaded: true });
        }
    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    renderButtons = () => {
        var oldarray = [this.state.correctAnswer, this.state.wrongAnswerOne, this.state.wrongAnswerTwo];
        var array = this.shuffleArray(oldarray);
        return (
            <div>
                <h1 >{this.state.question}</h1>
                <Button color="primary" size="lg" value={array[0]} onClick={this.onClickHandler}></Button>
                <Button color="primary" size="lg" value={array[1]} onClick={this.onClickHandler}></Button>
                <Button color="primary" size="lg" value={array[2]} onClick={this.onClickHandler}></Button>
            </div>);
    }

    onClickHandler(e) {
        var score = 0;
        if (e.value === this.correctAnswer) {
            score++;
        }
        this.props.onClick(score);
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