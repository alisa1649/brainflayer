import React from 'react';

import DeckNav from './DeckNav';
import DashboardHeader from './DashboardHeader';
import DeckShow from './DeckShow';
import NewCardForm from './NewCardForm';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DeckNav />
            <DeckShow />
            <NewCardForm />
        </div>
    )
}

export default Dashboard;