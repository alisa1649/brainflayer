import React from "react";
import {withRouter} from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.history.push("/subjects/" + this.state.searchText)
    }

    render() {
        return (
            <form className="searchbar-container" onSubmit={this.handleSubmit}>
                <div className="searchbar">
                    <div className="searchbar-icon"></div>

                    <input className="search-input" placeholder="e.g. MCAT, pharma, bar exam, Spanish, Series 7" type="text" value={this.state.searchText} onChange={(e) => this.setState({searchText: e.currentTarget.value})}/>
                    <button onClick={this.handleSubmit} className="search-button">
                        <span className="search-text">
                        Search
                        </span>
                    </button>
                </div>
            </form>
        )
    }
}

export default withRouter(SearchBar);