import React from 'react';
import NavBar from "../navbar/navbar";
import SearchBar from "./SearchBar";
import SearchListItems from "./SearchListItems";

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='results-page'>
                <NavBar />
                <SearchBar />
                <div className='results-wrapper'>
                    <div className='tag-panel'>
                    </div>
                    <div className='results-panel'>
                        <div className="results-header">
                            <div className="header-text">{this.props.match.params.search_term} Flashcards</div>
                            <div className="header-blurb">Study X using smart web & mobile flashcards created
                                by top students, teachers, and professors. Prep for a quiz or learn for fun!
                            </div>
                        </div>
                        <SearchListItems terms={this.props.match.params.search_term}/>
                    </div>
                </div>
            </div>

        )
    }

}

export default SearchResults;