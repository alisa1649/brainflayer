import React from 'react';
import SearchBar from "../search/SearchBar";
import {Link} from "react-router-dom";

class SearchbarDropdown extends React.Component {
    constructor(props) {
        super(props)
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
                        <li className="subject-item">
                            <Link to="/landing" className="dropdown-item-link"></Link>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchbarDropdown;