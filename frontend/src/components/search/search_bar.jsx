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
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    focus() {
        this.setState({focus: true})
    }

    blur() {
        this.setState({focus: false})
    }

    render() {
        if (this.props.tickers.length) {
            const filt = this.props.tickers.filter(ticker => {
                if (ticker.name.toLowerCase().includes(this.state.searchStr) && this.state.searchStr.length > 0) {
                    return ticker
                }
            });
            const showToggle = this.state.focus ? "show-search-result" : "hide-show-result"
            const result = (!filt.length && this.state.searchStr.length) ? <li>No result found</li> : filt.map(ticker => (
                <li key={ticker.id}>
                    < SearchItem ticker={ticker} />
                </li>
            ))
            console.log(!!this.state.searchStr.length)
            return (
                <div className="search-bar-wrapper" onFocus={this.focus} onBlur={this.blur}>
                    <label htmlFor="search-bar"><i className="fa fa-search"></i></label>
                    <div className="search-input-and-results">
                        <input 
                            type="text" 
                            id="search" 
                            name="search-bar" 
                            placeholder="Enter your favorite project" 
                            autoComplete="none" 
                            onChange={this.update('searchStr')}
                        />
                        <div className={showToggle}>
                            <ol>
                                {result}
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