import React from 'react';

import DeckNav from './DeckNav';
import DashboardHeader from './DashboardHeader';
import DeckShow from './DeckShow';
import NewDeckForm from './NewDeckForm';
import NewCardForm from './NewCardForm';
import DeleteDeckModal from "./DeleteDeckModal";
import EmptyDecksPage from "./EmptyDecksPage";
import {changeDeleteDeckVisibility} from "../../actions/ui_actions";
import {deleteDeck} from "../../actions/deck_actions";
import {connect} from "react-redux";
import EditDeckForm from "./EditDeckForm";

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <DeckNav />
            <DeleteDeckModal />
            {
                props.hasDecks
                    ? <DeckShow />
                    : <EmptyDecksPage />
            }
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        hasDecks: Object.keys(state.decks).length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDeleteDeckModal: () => dispatch(changeDeleteDeckVisibility(true)),
        removeDeck: (deck) => {
            return dispatch(deleteDeck(deck.id))
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);