import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';


export class Highscore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userScore: []
        };
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
            .catch(err => this.fetchFailure(err));
        const userScore = eval(getHSResponse);
        this.setState({
            userScore
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
                            <th>Nickname</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userScore.map((score, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{score.NickName}</td>
                                    <td>{score.Score}</td>
                                    <td>{score.TimePlayed}</td>
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