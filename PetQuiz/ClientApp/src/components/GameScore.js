import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class GameScore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            score: '',
            time: ''            
        };
        this.goBack = this.goBack.bind(this)
    }

    goBack() {
        this.props.toMenu();
    }

    render() {
        return (
            <div>
                <h1>Resultat</h1>
                <p>Din score blev {this.props.score} av 5!</p>
                <Button color="info" onClick={this.goBack}>Tillbaka till start</Button>
            </div>
        );
    }
}
