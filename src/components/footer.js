import React, { Component } from 'react';
import axios from 'axios';

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
        setTimeout(() => {
            alert.classList.add('hidden');
        }, 5000)
    }
    // Validate email / Submit form
    handleSubmit = async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('subscribe');
        const submitButton = document.getElementById('submit');
        const email = emailInput.value;
        const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let message = '';
        if (email === '') {
            message = 'Please enter your email';
            this.showAlert(message);
        } else if (!regx.test(email)) {
            message = 'Please enter valid email in format: name@domain.com';
            this.showAlert(message);
        } else if (regx.test(email)) {
            console.log('Form Submitted', email);
            // post subscription request
            //axios.post('http://localhost:4000/recipes/add', email)
            //    .then(res => console.log(res.data));
            //clear input field
            emailInput.value = '';
            emailInput.classList.remove('focused');
            message = 'Subscribed ' + email;
            this.showAlert(message);
            submitButton.setAttribute.name = 'Thank you';
        }
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
            </footer>
        );
    }
}

export default Footer;