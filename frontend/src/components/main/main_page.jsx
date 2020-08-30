import React from "react";
import SearchBar from '../search/search_bar';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/tickers');
  }

  render() {
    return (
      <div className="main">
        <div className="main-left">
          <div className="welcome-message">
            <h1>Welcome to Crypto Tracker</h1>
            <p className="welcome-main">
              Platform which provides fast and reliable data about your favorite blockchain
              projects.
            </p>
            <div className="all-tickers">
              <button className="tickers-btn" onClick={this.handleClick}>
                All Tickers
              </button>
            </div>
          </div>
        </div>
        <div className="main-right">
          <img src={"/images/main.png"} alt="" />
          < SearchBar />
        </div>
      </div>
    );
  }
}

export default MainPage;

