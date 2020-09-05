import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(`/tickers/${this.props.ticker.id}`)
    }


    render() {
        if (this.props.ticker) {
            const { name, current_price, image, price_change_percentage_24h, market_cap_rank} = this.props.ticker;
            const color = price_change_percentage_24h > 0 ? "#1ABC9C" : "#E74C3C";
            return (
                <div className="ticker-search-item" onMouseDown={this.handleClick}>
                    <div className="ticker-search-left">
                        <img src={image} alt=""/>
                        <div className="ticker-search-market-cap">{market_cap_rank}</div>
                        <div className="ticker-search-name">{name}</div>
                    </div>
                    <div className="ticker-search-right">
                        <div className="ticker-search-price">${current_price.toFixed(2)}</div>
                        <div className="ticker-search-price-change"style={{color}}>{price_change_percentage_24h.toFixed(2)}%</div>
                    </div>  
                </div>
            )
        }
    }
}

export default withRouter(SearchItem);