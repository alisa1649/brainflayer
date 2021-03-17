import React from 'react';
import Modal from '../interactions/modal';

class SessionForm extends React.Component {
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
            <Modal >
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h2>{this.props.formType}</h2>
                        <div>{this.renderErrors()}</div>
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
                        <div className="links">
                            {this.props.navLink}
                        </div>
                    </form>
                </div>
            </Modal>
        );
        return this.props.active ? contents : null;
    }
}

export default SessionForm;
