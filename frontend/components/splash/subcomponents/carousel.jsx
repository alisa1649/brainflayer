import React from 'react';
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activePhoto: 1 };
        window.setInterval(() => {
            this.setState({ activePhoto: (this.state.activePhoto + 1) % 6 })
        }, 3000)
    }
    render() {
        return (
            <div className="carousel">
                <div className="marketing">
                    <div className="hero">Rise to<br />your challenge.</div>
                    <div className="hero-sub">Flashcards for <span className="bold">serious learners.</span></div>
                    <div className="button-row">
                        <div className="square-button blue">Find Flashcards</div>
                        <div className="square-button">Make Flashcards</div>
                        <div className="watch-button">Watch Video</div>
                    </div>
                </div>
                <div className={"carousel-slide background-0" + (this.state.activePhoto == 0 ? " active" : "")}>
                    <div className="overlay"></div>
                </div>
                <div className={"carousel-slide background-1" + (this.state.activePhoto == 1 ? " active" : "")}>
                    <div className="overlay"></div>
                </div>
                <div className={"carousel-slide background-2" + (this.state.activePhoto == 2 ? " active" : "")}>
                    <div className="overlay"></div>
                </div>
                <div className={"carousel-slide background-3" + (this.state.activePhoto == 3 ? " active" : "")}>
                    <div className="overlay"></div>
                </div>
                <div className={"carousel-slide background-4" + (this.state.activePhoto == 4 ? " active" : "")}>
                    <div className="overlay"></div>
                </div>
                <div className={"carousel-slide background-5" + (this.state.activePhoto == 5 ? " active" : "")}>
                    <div className="overlay"></div>
                </div>
            </div>
        )
    }

}
export default Carousel;