import React from 'react';
import { connect } from 'react-redux';
import { changeLoginVisibility, changeSignupVisibility } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import { Link } from "react-router-dom";
import SearchbarDropdown from "../controls/searchbar_dropdown";

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDropdownVisible: false
        }
    }

    componentDidMount() {
        document.addEventListener("click", () => { this.setState({ isDropdownVisible: false }) });
    }

    render() {
        return (
            <div id="navbar">
                <div className="logo-container">
                    <Link to="/">
                        <div className="logo"></div>
                    </Link>
                </div>

                <span className="items">
                    <div className="options">
                        <div className="option dropdown find-flashcards" >
                            <Link to="/subjects" className="with-search-icon">Find Flashcards</Link>
                            <SearchbarDropdown />
                        </div>
                        {
                            this.props.loggedIn
                                ? <Link to="/dashboard" className="option make-flashcards">
                                    Make Flashcards
                                  </Link>
                                : <div className="option make-flashcards" onClick={() => { this.props.openSignupModal() }}>
                                    Make Flashcards
                                  </div>
                        }
                        <a href="https://github.com/alisa1649" className="option why-works">
                            Why It Works
                        </a>
                        <div className="option learn-more">
                            More...
                        </div>
                    </div>

                    {
                        this.props.loggedIn
                            ? <div className="actions">
                                <div className={"action account dropdown" + (this.state.isDropdownVisible ? " highlight" : "")} onClick={(e) => {
                                    e.stopPropagation();
                                    return this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
                                }} >
                                    <img className="user-account-image" src="https://brainscape-prod.s3.amazonaws.com/images/avatar_generic_square.png"></img>
                                    <span className={"account-name-link" + (this.state.isDropdownVisible ? " highlight" : "")}>{this.props.email.slice(0, this.props.email.indexOf("@"))}</span>
                                    <ul className={this.state.isDropdownVisible ? "dropdown-items" : "dropdown-items hidden"}>
                                        <li className="dropdown-item">
                                            <a href="#">My Account</a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="#" onClick={(e) => {
                                                e.stopPropagation();
                                                this.props.logout();
                                            }}>Log Out</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="action upgrade">
                                    Upgrade To Pro
                            </div>
                            </div>
                            : <div className="actions">
                                <div className="action login" onClick={this.props.openLoginModal}>
                                    Log In
                            </div>
                                <div className="action upgrade" onClick={this.props.openSignupModal}>
                                    Get Started
                            </div>
                            </div>
                    }
                </span>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
        email: state.users[state.session.id]
            ? state.users[state.session.id].email
            : ""
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openLoginModal: () => dispatch(changeLoginVisibility(true)),
        openSignupModal: () => dispatch(changeSignupVisibility(true)),
        logout: () => {
            return dispatch(logout())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);