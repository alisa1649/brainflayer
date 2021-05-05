import React from 'react';

import DeckNav from './DeckNav';
import DashboardHeader from './DashboardHeader';
import DeckShow from './DeckShow';
import NewDeckForm from './NewDeckForm';
import NewCardForm from './NewCardForm';
import DeleteDeckModal from "./DeleteDeckModal";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DeckNav />
            <DeleteDeckModal />
            <DeckShow />
            <NewDeckForm />
            <NewCardForm />
        </div>
    )
}

export default Dashboard;