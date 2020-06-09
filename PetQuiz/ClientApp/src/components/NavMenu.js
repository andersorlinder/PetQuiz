import React, { Component } from 'react';
import './NavMenu.css';
import logo from './petquiz.PNG'

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    render() {
        return (
            <header>
                <img alt="PetQuizLogo" src={logo} />
            </header>
        );
    }
}
