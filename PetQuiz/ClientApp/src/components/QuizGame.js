import React, { Component } from 'react';
import { NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Question } from './Question';
import { GameScore } from './GameScore'


export class QuizGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: true,
            score: 0
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(qScore, status) {
        this.setState({
            isPlaying: status,
            score: qScore
        });
    }



    async SaveScore() {
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
    }

    static fetchFailure(err) {
        console.log(err);
    }

    render() {
        return (
            <div>
                {this.state.isPlaying ?
                    <Question onClick={this.onClickHandler} /> :
                    <GameScore score={this.state.score} />
                }
            </div>
        );
    }
}
