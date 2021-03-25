import React from 'react';

import DeckNav from './DeckNav';
import DashboardHeader from './DashboardHeader';
import DeckShow from './DeckShow';
import NewDeckForm from './NewDeckForm';
import NewCardForm from './NewCardForm';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DeckNav />
            <DeckShow />
            <NewDeckForm />
            <NewCardForm />
        </div>
    )
}

export default Dashboard;