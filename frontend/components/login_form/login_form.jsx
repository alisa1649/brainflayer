import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { changeLoginVisibility, changeSignupVisibility } from '../../actions/ui_actions';
import Modal from '../modal/modal';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const contents = (
            <Modal className="login-modal-container" closeModal={this.props.closeModal}>
                <form onSubmit={this.handleSubmit} className="modal-form-box">
                    <h2>Log In</h2>
                    <input
                        type="text"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="modal-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="modal-input"
                    />
                    <input className={`form-submit ${this.state.password.length < 1 || this.state.email.length < 1 ? "disabled" : ""}`} type="submit" />

                    <div className="errors">{this.renderErrors()}</div>
                    <div className="links">
                        <a href="#" onClick={this.props.switchModal}>Create an account?</a>
                    </div>
                    <button className='btn-demo-user' onClick= {(e) => {
                        e.preventDefault();
                        this.props.processForm({email: "demouser@demo.com",
                            password: "demouser@demo.com"});
                    }} >
                        Login as Demo User
                    </button>
                </form>
            </Modal>
        );

        if (this.props.loggedIn && this.props.visible) {
            return <Redirect to="/dashboard" />
        }
        else {
            return this.props.visible ? contents : null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
        visible: state.ui.loginVisibility,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => {
            dispatch(login(user))
            dispatch(changeLoginVisibility(false))
        },
        closeModal: () => dispatch(changeLoginVisibility(false)),
        switchModal: () => {
            dispatch(changeLoginVisibility(false));
            dispatch(changeSignupVisibility(true));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

