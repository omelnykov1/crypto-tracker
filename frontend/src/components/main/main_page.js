import React from "react";
import Ticker from '../crypto/ticker/ticker';
import TickerIndex from '../crypto/ticker_index'


const keys = require("../../keys");
const axios = require('axios');
const CoinGecko = require("coingecko-api");

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tickers: []};
    }


    // getData = () => {
    //     axios.get("https://api.coingecko.com/api/v3/coins/list").then((data) => {
    //         this.setState({tickers: data.data.slice(750,760)})
    //     });
    // };

    render() {
        // const CoinGeckoClient = new CoinGecko();
        // this.getData();
        return (
          <div>
            <h1>Crypto Tracker</h1>
            <div>
                < TickerIndex />
                {/* {
                this.state.tickers.map((ticker, i) => (
                    <Ticker ticker={ticker} key={i} />
                ))} */}
            </div>
          </div>
        );
    }
}

export default MainPage;
