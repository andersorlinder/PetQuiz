import React, { Component } from 'react';
import { Question } from './Question';
import { GameScore } from './GameScore'


export class QuizGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: true,
            score: 0,
            username: ''
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.goBack = this.goBack.bind(this)
    }


    async componentDidMount() {
        this.setState({
            username: this.props.username
        })
    }

    onClickHandler(qScore, status) {
        this.setState({
            isPlaying: status,
            score: qScore
        });
    }

    async goBack() {
        await fetch('https://localhost:5001/score', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ Username: this.state.username, Score: this.state.score })
        });
        this.props.toMenu();
    }

    static fetchFailure(err) {
        console.log(err);
    }

    render() {
        return (
            <div>
                {this.state.isPlaying ?
                    <Question onClick={this.onClickHandler} /> :
                    <GameScore score={this.state.score} toMenu={this.goBack}/>
                }
            </div>
        );
    }
}
