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
                        <div className="square-button blue">Find Flashcards</div>
                        <div className="square-button">Make Flashcards</div>
                        <div className="watch-button">Watch Video</div>
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
export default Carousel;