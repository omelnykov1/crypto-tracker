import React from "react";
import { withRouter } from "react-router-dom";



const keys = require("../../keys");
const axios = require('axios');
const CoinGecko = require("coingecko-api");

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/tickers');
  }

  render() {
    // const CoinGeckoClient = new CoinGecko();
    // this.getData();
    return (
      <div className="main">
        <div className="main-left">
          <div className="welcome-message">
            <h1>Welcome to Crypto Tracker!</h1>
            <p classNam="welcome-main">
              Platfrom where you can track your favorite blockchain projects and
              much more.
            </p>
            <div className="all-tickers">
              <button className="tickers-btn" onClick={this.handleClick}>All Tickers</button>
            </div>
          </div>
        </div>
        <div className="main-right">
          <img src={"/images/front.jpg"}></img>
        </div>
      </div>
    );
  }
}

export default MainPage;
