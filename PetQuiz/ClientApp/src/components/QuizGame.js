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
        this.saveScore();
    }

    async goBack() {
        this.props.toMenu();
        console.log(this.state.username);
        console.log(this.state.score);
        console.log(this.state.isPlaying);
        const saveScoreResponse = await fetch('https://localhost:5001/savescore', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ Username: this.state.username, Score: this.state.score })
        });
        if (saveScoreResponse === 200) {
            console.log("Result saved")
        }
    }


    saveScore() {
        console.log(this.state.username);
        console.log(this.state.score);
        console.log(this.state.isPlaying);
        
    }

    static fetchFailure(err) {
        console.log(err);
    }

    render() {
        console.log(this.state.isPlaying);
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
