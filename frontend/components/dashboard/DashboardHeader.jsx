import React from 'react';
import { connect } from 'react-redux';
import {deleteDeck} from '../../actions/deck_actions';
import {Link} from 'react-router-dom';
import {changeDeleteDeckVisibility, changeEditDeckVisibility, changeNewDeckVisibility} from "../../actions/ui_actions";


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
        if (!this.props.deck) {
            return null
        }
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
                        <span className="darker-text">Creator: </span><Link to={`/subjects/${this.props.deck.author.email}`}>{this.props.deck ? this.props.deck.author.email : ""}</Link>
                    </div>
                    <div className="deck-header-data">
                        <span className="darker-text">Tags:</span> {this.props.deck && this.props.deck.tags ? this.props.deck.tags.split(',').map((w) => {
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
                                    <li onClick={(e) => {
                                        e.stopPropagation();
                                        this.props.openEditDeckModal();
                                        this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
                                    }} className="icon edit-deck">
                                        <a href="#" >Edit Deck Name</a>
                                    </li>
                                    <li onClick={(e) => {
                                        e.stopPropagation();
                                        this.props.openDeleteDeckModal();
                                        this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
                                    }} className="icon delete-deck">
                                        <a href="#" >Delete This Deck</a>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDeleteDeckModal: () => dispatch(changeDeleteDeckVisibility(true)),
        removeDeck: (deck) => {
            return dispatch(deleteDeck(deck.id))
        },
        openNewDeckModal: () => dispatch(changeNewDeckVisibility(true)),
        openEditDeckModal: () => dispatch(changeEditDeckVisibility(true))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
