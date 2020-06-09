import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';


export class Highscore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userScores: []
        };
        this.goBack = this.goBack.bind(this)
    }

    async componentDidMount() {
        this.getHighscoreasync()
    }

    async getHighscoreasync() {
        const highScoreResponse = await fetch('https://localhost:5001/highscores', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .catch(err => this.fetchFailure(err));
        const userScores = JSON.parse(highScoreResponse);
        this.setState({
            userScores
        });

    }

    goBack() {
        this.props.toMenu();
    }

    render() {

        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Epost</th>
                            <th>Poäng</th>
                            <th>Tillfälle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userScores.map((score, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{score.NickName}</td>
                                    <td>{score.Score}</td>
                                    <td>{new Date(score.TimePlayed).toLocaleString()}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <Button color="info" onClick={this.goBack}>Tillbaka till start</Button>
            </div>
        );
    }
}