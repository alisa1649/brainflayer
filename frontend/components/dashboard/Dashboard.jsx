import React from 'react';

import DeckNav from './DeckNav';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DeckNav />
            <DashboardHeader />
        </div>
    )
}

export default Dashboard;