import React from 'react';
import {Link} from "react-router-dom";
import {changeLoginVisibility, changeSignupVisibility} from "../../../actions/ui_actions";
import {logout} from "../../../actions/session_actions";
import {connect} from "react-redux";
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activePhoto: 1 };
        window.setInterval(() => {
            this.setState({ activePhoto: (this.state.activePhoto + 1) % 6 })
        }, 3000)
    }
    render() {
        const slides = [];
        for (let i = 0; i < 6; i++) {
            slides.push(i);
        }
        return (
            <div className="carousel">
                <div className="marketing">
                    <div className="hero">Rise to<br />your challenge.</div>
                    <div className="hero-sub">Flashcards for <span className="bold">serious learners.</span></div>
                    <div className="button-row">
                        <Link to="/subjects" className="square-button blue">Find Flashcards</Link>
                        {
                        this.props.loggedIn
                            ? <Link to="/dashboard" className="square-button">
                                Make Flashcards
                            </Link>
                            : <div className="square-button" onClick={() => { this.props.openSignupModal() }}>
                                Make Flashcards
                            </div>
                        }
                    </div>
                </div>
                {
                    slides.map((i) => (
                        <div key={i} className={`carousel-slide background-${i}` + (this.state.activePhoto == i ? " active" : "") + (this.state.activePhoto == (i + 1) % 6 ? " previous" : "")}>
                            <div className="overlay"></div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openSignupModal: () => dispatch(changeSignupVisibility(true))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);