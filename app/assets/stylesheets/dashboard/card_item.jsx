import React from 'react';

class CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    }
    render() {
        const card = this.props.card;
        return (
            <li className="deck-item" >
                <div className="round-icon-container">
                    <div className="round-icon">
                    </div>
                </div>
                <div className={"card-icon material-icons" + (this.state.isFlipped ? " flipped" : "")}>
                    article
                </div>
                <div className="card-details">
                    <div className="card-title-container">
                        <span className="card-title">
                            {this.state.isFlipped ? card.body : card.title}
                        </span>
                        <p className={"deck-item-caption" + (this.state.isFlipped ? " hidden" : "")}>
                            0 of 3 unique cards studied
                        </p>
                    </div>
                    <div className={"item-bar" + (this.state.isFlipped ? " hidden" : "")}></div>
                </div>
                <div className="card-delete">
                    <div className="delete-text" onClick={() => this.setState({ isFlipped: !this.state.isFlipped })} >
                        Flip Card
                    </div>
                </div>
            </li>
        )
    }
}




export default CardItem;