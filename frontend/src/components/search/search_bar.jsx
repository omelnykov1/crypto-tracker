import React, { useState } from 'react';
import SearchItem from './search_item';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {
  const [focus, setFocus] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const renderSearchResult = () => {
    if (props.tickers.length) {
      const filt = props.tickers.filter((ticker) => {
        if ( 
          (ticker.name.toLowerCase().includes(searchStr) || 
          ticker.name.toUpperCase().includes(searchStr) || 
          ticker.name.includes(searchStr) || 
          ticker.symbol.toLowerCase().includes(searchStr) ||
          ticker.symbol.toUpperCase().includes(searchStr) ||
          ticker.symbol.includes(searchStr)) &&
          searchStr.length > 0
        ) {
          return ticker;
        }
      });
      return !filt.length && searchStr.length ? 
        (<li className="no-result">No result found</li>) 
          : 
        ( filt.map((ticker) => (
            <li key={ticker.id}>
              <SearchItem ticker={ticker} />
            </li>
        ))
      );
    }
  }

  const showToggle = focus ? "show-search-result" : "hide-show-result";

  return (
    <div className="search-bar-wrapper">
      <label htmlFor="search-bar">
        <i className="fa fa-search"></i>
      </label>
      <div
        className="search-input-and-results"
        name="search-bar"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <input
          size="16"
          type="text"
          id="search"
          name="search-bar"
          placeholder="Enter your favorite project"
          autoComplete="none"
          onChange={e => setSearchStr(e.currentTarget.value)}
        />
        <div className={showToggle}>
          <ol className="search-list">{renderSearchResult()}</ol>
        </div>
      </div>
      <div className="search-btn">
        <i className="search-b">Search</i>
      </div>
    </div>
  );
}

export default withRouter(SearchBar);