import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul className="navigation">
                    <li className="navigation__title">TACITKNOWLEDGE</li>
                    <li className="navigation__li" role="button" tabIndex="1" aria-label="Select if you have an existing account">Log in</li>
                    <li className="navigation__li" role="button" tabIndex="2" aria-label="Select to create new account">Sign up</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;