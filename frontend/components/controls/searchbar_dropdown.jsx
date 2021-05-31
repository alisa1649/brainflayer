import React from 'react';
import SearchBar from "../search/SearchBar";
import {Link} from "react-router-dom";
import {fetchAllDecks} from "../../util/deck_api_util";

class SearchbarDropdown extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           decks: {}
       }
    }

    componentDidMount() {
        fetchAllDecks().then(decks => {
            this.setState({decks: decks})
        })
    }

    render() {
        return (
            <div className="dropdown-container">
                <SearchBar />
                <div className="dropdown-content">
                    <div className="dropdown-close">
                    </div>
                    <div className="dropdown-title">
                        <span className="dropdown-heading">
                            BrainFlayer's Knowledge Genome
                        </span>
                    </div>
                    <div className="dropdown-subtitle">
                        Browse over 1 million classes created by Alisa!
                    </div>
                    <ul className="dropdown-subjects">
                        {console.log(this.state.decks)}
                        {Object.values(this.state.decks).map(deck => <li key={deck.id} className="subject-item">
                            <Link to={`/practice/${deck.id}`} className="dropdown-item-link">
                                {deck.title}
                            </Link>
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchbarDropdown;