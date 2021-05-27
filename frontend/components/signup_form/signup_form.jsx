import React from 'react';
import { connect } from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import { changeSignupVisibility, changeLoginVisibility } from '../../actions/ui_actions';
import Modal from '../modal/modal';
import Checkbox from "../controls/checkbox";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.state.errors = [];
        if (this.state.password !== this.state.password2) {
            this.setState((state) => state.errors.push("Passwords must match"))
            console.log(JSON.stringify(this.state))
            return
        }
        this.props.processForm(user);
    }

    renderErrors() {
        const errors = this.state.errors.concat(this.props.errors);
        return (
            <ul>
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const contents = (
            <Modal className="signup-modal-container" closeModal={this.props.closeModal}>
                <div className="signup-marketing">
                    <div className="logo"></div>
                    <div className="bottom">
                        <h3>Start Learning Faster:</h3>
                        <ul>
                            <li>Learn anything in half the time, using cognitive science</li>
                            <li>Add your own digital flashcards</li>
                            <li>Find millions of other public cards</li>
                            <li>Sync with mobile app</li>
                        </ul>
                    </div>

                </div>
                <form onSubmit={this.handleSubmit} className="modal-signup-form">
                    <h2>Get Started</h2>
                    <input
                        placeholder="E-mail"
                        onChange={this.update('email')}
                        className="modal-input"
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password must be at least 6 characters"
                        onChange={this.update('password')}
                        className="modal-input"
                    />
                    <input
                        type="password"
                        id="confirm_password"
                        placeholder="Confirm Password"
                        onChange={this.update('password2')}
                        className="modal-input"
                    />
                    <div className="registration-controls">
                        <Checkbox text="Accept Terms" />
                        <input className={`form-submit ${this.state.password.length < 6 || this.state.email.length < 6 ? "disabled" : ""}`} type="submit" value="Register" />
                        <button className='btn-demo-user' onClick= {(e) => {
                            e.preventDefault();
                            dispatch(login({
                                email: "demouser@demo.com",
                                password: "demouser@demo.com"
                            }))
                        }} >
                            Login as Demo User
                        </button>
                    </div>
                    <div className="errors">{this.renderErrors()}</div>
                    <div className="links">
                        <span className="signup-link"><a href="#" onClick={this.props.switchModal}>Already have an account?</a></span>
                    </div>
                </form>
            </Modal>
        );
        return this.props.visible ? contents : null;
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.ui.signupVisibility,
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(changeSignupVisibility(false)),
        switchModal: () => {
            dispatch(changeLoginVisibility(true));
            dispatch(changeSignupVisibility(false));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

