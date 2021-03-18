import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

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
            <div className="modal-overlay" onClick={this.props.closeModal}>
                <div className="login-form-container" onClick={e => e.stopPropagation()}>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h2>{this.props.formType}</h2>
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                        <input className={`form-submit ${this.state.password.length < 1 || this.state.email.length < 1 ? "disabled" : ""}`} type="submit" value={this.props.formType} />

                        <div className="errors">{this.renderErrors()}</div>
                        <div className="links">
                            <a href="#" onClick={this.props.onClickNav}>{this.props.navText}</a>
                        </div>
                    </form>
                </div>
            </div>
        );
        return this.props.visible ? contents : null;
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.ui.loginVisibility,
        errors: state.errors.session,
        formType: 'Log In',
        navText: "Create an account?"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

