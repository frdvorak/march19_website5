import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__wrapper">
                    <h3 className="header__wrapper__h3">TACITKNOWLEDGE</h3>
                    <h1 className="header__wrapper__h1">BE PART OF TEAM AWESOME</h1>
                    <p className="header__wrapper__p">And find the job that will allow you to make a difference</p>
                    <div className="header__wrapper__button" role="button" tabIndex="3" aria-label="Click to apply for job">Apply now</div>
                </div>
            </header>
        );
    }
}

export default Header;