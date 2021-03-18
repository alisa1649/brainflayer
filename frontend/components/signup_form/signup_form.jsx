import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { changeSignupVisibility, changeLoginVisibility } from '../../actions/ui_actions';
import Modal from '../modal/modal';

class SignupForm extends React.Component {
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
            <Modal closeModal={this.props.closeModal}>
                <form onSubmit={this.handleSubmit} className="modal-form-box">
                    <h2>Sign Up</h2>
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
                        <a href="#" onClick={this.props.switchModal}>Already have an account?</a>
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

