import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {deleteDeck} from '../../actions/deck_actions';
import {Link, Redirect} from 'react-router-dom';
import { useEffect } from 'react';
import { render } from 'react-dom';
import DeckNav from './DeckNav';
import {changeDeleteDeckVisibility} from "../../actions/ui_actions";
import DeleteDeckModal from "./DeleteDeckModal";

class DashboardHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownVisible: false
        }
    }

    componentDidMount() {
        document.addEventListener("click", () => { this.setState({ isDropdownVisible: false }) });
    }

    render() {
        const contents = (
            <div className="dash-header">
                <div className="header-icon-container">
                    <img className="pack-icon-image" src="https://s3.amazonaws.com/brainscape-prod/system/pm/017/603/530/active_icons/iphone_3x_retina_161650729620210323-4823-oic2v.png?1616507296" />
                    <div className="choose-icon-button"></div>
                </div>
                <div className="header-text-container">
                    <div className="header-title">
                        {this.props.deck ? this.props.deck.title : ""}
                    </div>
                    <div className="deck-header-data creator-name">
                        <span className="darker-text">Creator:</span> {this.props.deck ? this.props.deck.author.email.slice(0, this.props.deck.author.email.indexOf('@')) : ""}
                    </div>
                    <div className="deck-header-data">
                        <span className="darker-text">Tags:</span> {this.props.deck ? this.props.deck.tags.split(',').map((w) => {
                            return <Link key={w} to={`/subjects/${w.trim()}`}>{w}</Link>
                    }) : ""}
                    </div>
                    <div className="header-actions">
                        <div className="deck-action-buttons">
                            <Link to={`/practice/${this.props.deck ? this.props.deck.id : ""}`} className="study-button">
                                <div className="study-icon-container">
                                    <i className="study-icon"></i>
                                </div>
                            </Link>
                            <div className="ellipses-button" onClick={(e) => {
                                e.stopPropagation();
                                return this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
                            }}>
                                <div className="ellipses-open">
                                    <div className="ellipses-icon-container">
                                        <i className="ellipses-icon"></i>
                                    </div>
                                </div>
                                <ul className={this.state.isDropdownVisible ? "menu-open" : "menu-open hidden"}>
                                    <li className="icon edit-deck">
                                        <a href="#" onClick={(e) => {
                                            e.stopPropagation();
                                            // this.props.openEditDeckModal();
                                        }}>Edit Deck Name</a>
                                    </li>
                                    <li className="icon delete-deck">
                                        <a href="#" onClick={(e) => {
                                            e.stopPropagation();
                                            this.props.openDeleteDeckModal();
                                        }}>Delete This Deck</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return contents;
    }
}

const mapStateToProps = (state) => {
    return {
        visibility: state.ui.deleteDeckVisibility
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
