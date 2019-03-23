import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="footer">
                <h1 className="footer__h1">Subscribe to our newsletter</h1>
                <form className="footer__form" action="">
                    <label className="footer__form__label" for="subscribe">Hi! Want to know when a new job is posted?</label>
                    <input className="footer__form__input" type="text" id="subscribe" name="email" placeholder="Enter your email address" />
                    <imput className="footer__form__submit" type="submit" id="submit" name="submit" >Subscribe</imput>
                </form>
            </footer>
        );
    }
}

export default Footer;