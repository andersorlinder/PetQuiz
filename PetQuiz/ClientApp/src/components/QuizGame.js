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
            IsPlaying: status,
            score: this.state.score + qScore,
        });
    }

    static fetchFailure(err) {
        console.log(err);
    }

    render() {
        console.log(this.state.isPlaying);
        return (
            <div>
                {true ?
                    <Question onClick={this.onClickHandler} /> :
                    <GameScore />
                }
            </div>
        );
    }
}
