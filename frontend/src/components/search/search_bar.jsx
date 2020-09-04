import React from 'react';
import SearchItem from './search_item';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            focus: false,
            searchStr: "" 
        };
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.update = this.update.bind(this);
    }

    update() {
        return e => this.setState({ 'searchStr': e.target.value })
    }

    focus() {
        this.setState({focus: true})
    }

    blur() {
        this.setState({focus: false})
    }

    renderSearchResult() {
        const filt = this.props.tickers.filter((ticker) => {
          if (
            (ticker.name.toLowerCase().includes(this.state.searchStr) ||
              ticker.name.toUpperCase().includes(this.state.searchStr) ||
              ticker.name.includes(this.state.searchStr)) &&
            this.state.searchStr.length > 0
          ) {
            return ticker;
          }
        });
         const result =
           !filt.length && this.state.searchStr.length ? (
             <li className="no-result">No result found</li>
           ) : (
             filt.map((ticker) => (
               <li key={ticker.id}>
                 <SearchItem ticker={ticker} />
               </li>
             ))
           );
        return result;
    }

    render() {
        if (this.props.tickers.length) {
            const showToggle = this.state.focus ? "show-search-result" : "hide-show-result"
            return (
                <div className="search-bar-wrapper">
                    <label htmlFor="search-bar"><i className="fa fa-search"></i></label>
                    <div className="search-input-and-results" name="search-bar" onFocus={this.focus} onBlur={this.blur}>
                        <input 
                            type="text" 
                            id="search" 
                            name="search-bar" 
                            placeholder="Enter your favorite project" 
                            autoComplete="none" 
                            onChange={this.update()}
                        />
                        <div className={showToggle}>
                            <ol className="search-list">
                                {this.renderSearchResult()}
                            </ol>
                        </div>
                    </div>
                    <div className="search-btn">
                        <i className="search-b">Search</i>
                    </div>
                </div>
            )
        } else {
            return <></>
        }
    }
}

export default withRouter(SearchBar);