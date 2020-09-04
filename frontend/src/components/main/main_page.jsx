import React from "react";
import SearchBar from '../search/search_bar';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTickers();
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
              Platform which provides fast and reliable data about your favorite
              blockchain projects. The simplified overview of everything makes
              it easy to quickly navigate to the coins you have an interest in.
            </p>
            <div className="all-tickers">
              <button className="tickers-btn" onClick={this.handleClick}>
                All Tickers
              </button>
            </div>
          </div>
        </div>
        <div className="main-right">
          <img src={"/images/not-main.png"} alt="" />
          <SearchBar tickers={this.props.tickers} />
        </div>
      </div>
    );
  }
}

export default MainPage;

