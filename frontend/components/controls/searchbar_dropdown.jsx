import React from 'react';
import SearchBar from "../search/SearchBar";
class SearchbarDropdown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="dropdown-container">
                <SearchBar />
            </div>
        )
    }
}

export default SearchbarDropdown;