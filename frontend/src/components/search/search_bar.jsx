import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="search-bar-wrapper">
                <label htmlFor="search-bar"><i className="fa fa-search"></i></label>
                <input type="text" id="search" name="search-bar" placeholder="Enter your favorite project" autoComplete="none" />
                <div className="search-btn">
                    <i className="search-b">Search</i>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar);