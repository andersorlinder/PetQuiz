import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class Highscore extends Component {

    constructor(props) {
        super(props);
        this.state = { userScore: [] };
        this.goBack = this.goBack.bind(this)
    }

    async componentDidMount() {
        this.getHighscoreasync()
    }

    async getHighscoreasync() {
        const getHSResponse = await fetch('https://localhost:5001/geths', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .catch(err => this.fetchFailure(err));;
        const userScore = eval(getHSResponse);
        this.setState({
            userScore
        });
        console.log(this.state.userScore);
        //this.renderHighScore()
    }

    //renderHighScore() {
         
    //}

    goBack() {
        this.props.toMenu();
    }

    render() {
        
        return (
            <div>
                <ul>
                    
                </ul>
               <Button color="info" onClick={this.goBack}>Tillbaka till start</Button>
            </div>
        );
    }
}