import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { changeLoginVisibility, changeSignupVisibility } from '../../actions/ui_actions';
import Modal from '../modal/modal';

import DeckNav from './DeckNav';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DeckNav />
        </div>
    )
}

export default Dashboard;