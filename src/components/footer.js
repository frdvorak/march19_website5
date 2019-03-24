import React, { Component } from 'react';


class Footer extends Component {
    // Input field 'placeholder' text animation (don't allow placeholder text to slide back unless the field is empty)
    handleChange = () => {
        const emailInput = document.getElementById('subscribe');
        if (emailInput.value !== '') {
            emailInput.classList.add('focused');
        } else {
            emailInput.classList.remove('focused');
        }
    }
    // Show and hide alert message if validation fails
    showAlert = (message) => {
        const alert = document.querySelector('.footer__alert');
        alert.innerHTML = message;
        alert.classList.remove('hidden');
    }
    // Validate email / Submit form
    handleSubmit = async (e) => {

    }
    render() {
        return (
            <footer className="footer">
                <h1 className="footer__h1">Subscribe to our newsletter</h1>
                <p className="footer__p" >Hi! Want to know when a new job is posted?</p>
                <p className="footer__alert hidden">Email is required</p>
                <form className="footer__form" onSubmit={this.handleSubmit} action="">
                    <input onChange={this.handleChange} className="footer__form__input" type="text" id="subscribe" name="email" />
                    <label className="footer__form__label" htmlFor="subscribe">Enter your email address</label>
                    <input className="footer__form__submit" type="submit" id="submit" name="Submit" />
                </form>
                <p className="footer__success hidden">Thank you for subscribing to our newsletter</p>
            </footer>
        );
    }
}

export default Footer;