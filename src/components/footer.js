import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="footer">
                <h1 className="footer__h1">Subscribe to our newsletter</h1>
                <form className="footer__form" action="">
                    <label className="footer__form__label" htmlFor="subscribe">Hi! Want to know when a new job is posted?</label>
                    <input className="footer__form__input" type="text" id="subscribe" name="email" placeholder="Enter your email address" />
                    <input className="footer__form__submit" type="submit" id="submit" name="Submit" />
                </form>
            </footer>
        );
    }
}

export default Footer;