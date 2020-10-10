import React from 'react';
const numeral = require('numeral')

const TickerWidget = ( { ticker }) => {
    const { image, symbol, name, market_cap_rank, market_data } = ticker;
    const change = numeral(market_data.price_change_percentage_24h).format("0.0a");
    const marketCap = numeral(+market_data.market_cap.usd).format("($ 0.00 a)");
    const price = market_data.current_price.usd > 0.01 ? market_data.current_price.usd.toFixed(2) : market_data.current_price.usd.toFixed(4);
    const c = +change >= 0 ? "green" : "red";
    const totalVolume = numeral(+market_data.total_volume.usd).format("($ 0.00 a)");
    return(
        <div className="ticker-widget-wrapper">
            <div className="ticker-widget-top">
                <div className="ticker-widget-top-left">
                    <img src={image.small} alt=""/>
                </div>
                <div className="ticker-widget-top-right">
                    <div className="ticker-widget-top-right-top">{name} ({symbol.toUpperCase()})</div>
                    <div className="ticker-widget-top-right-bottom">
                        ${price} USD <p style={{color: c}}>({change}%)</p>
                    </div>
                </div>
            </div>
            <div className="ticker-widget-bottom">
                <div className="ticker-widget-bottom-left">
                    <div className="ticker-widget-bottom-left-top">RANK</div>
                    <div className="ticker-widget-bottom-left-bottom">{market_cap_rank}</div>
                </div>
                <div className="ticker-widget-bottom-center">
                    <div className="ticker-widget-bottom-center-top">MARKET CAP</div>
                    <div className="ticker-widget-bottom-center-bottom">{marketCap}</div>
                </div>
                <div className="ticker-widget-bottom-right">
                    <div className="ticker-widget-bottom-right-top">VOLUME</div>
                    <div className="ticker-widget-bottom-right-bottom">{totalVolume}</div>
                </div>
            </div>
        </div>
    )
}

export default TickerWidget;