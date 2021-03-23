import React from 'react';

import DeckNav from './DeckNav';
import DashboardHeader from './DashboardHeader';
import DeckShow from './DeckShow';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DeckNav />
            <DeckShow />
        </div>
    )
}

export default Dashboard;