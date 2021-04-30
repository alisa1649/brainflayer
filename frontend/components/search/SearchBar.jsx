import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="searchbar-container">
                <div className="searchbar">
                    <div className="searchbar-icon"></div>

                    <input className="search-input" placeholder="e.g. MCAT, pharma, bar exam, Spanish, Series 7" type="text"/>
                    <button className="search-button">
                        <span className="search-text">
                        Search
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar;