import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, setLoginModalVisibility } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    // console.log("SSSSSS: " + JSON.stringify(state, null, 2))
    return {
        active: state.session,
        errors: state.errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">Create an account?</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(setLoginModalVisibility(false))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
