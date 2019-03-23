import React, { Component } from 'react';

class Navigation extends Component {
    state = {}
    render() {
        return (
            <nav>
                <ul className="navigation">
                    <li className="navigation__title">TACITKNOWLEDGE</li>
                    <li className="navigation__li">Log in</li>
                    <li className="navigation__li">Sign up</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;