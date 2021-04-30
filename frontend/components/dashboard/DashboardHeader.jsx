import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getDecks } from '../../actions/deck_actions';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { render } from 'react-dom';
import DeckNav from './DeckNav';

class DashboardHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = (
            <div className="dash-header">
                <div className="header-icon-container">
                    <img className="pack-icon-image" src="https://s3.amazonaws.com/brainscape-prod/system/pm/017/603/530/active_icons/iphone_3x_retina_161650729620210323-4823-oic2v.png?1616507296" />
                    <div className="choose-icon-button"></div>
                </div>
                <div className="header-text-container">
                    <div className="header-title">
                        {this.props.deck ? this.props.deck.title : ""}
                    </div>
                    <div className="creator-name">
                        <span className="darker-text">Creator:</span> {this.props.deck ? this.props.deck.author.email.slice(0, this.props.deck.author.email.indexOf('@')) : ""}
                    </div>
                    <div className="header-buttons">
                    </div>
                </div>
            </div>
        )
        return content;
    }
};


export default DashboardHeader;
