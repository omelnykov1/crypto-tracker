import React from 'react';
import { withRouter } from "react-router-dom";

class TableItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTicker = this.deleteTicker.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    deleteTicker() {
        const filtered = this.props.table.tickers.filter(ticker => ticker.id !== this.props.ticker.id)
        this.props.table.tickers = filtered
        filtered.length ? this.props.changeTable(this.props.table) : this.props.changeTable(this.props.table).then(this.props.history.push('/tickers'))
    }

    handleClick() {
        this.props.history.push(`/tickers/${this.props.ticker.id}`);
    }

    render() {
        const {ath, current_price,name,image, market_cap_rank, atl_change_percentage} = this.props.ticker;
        return(
            <div className="table-item-container">
                <div className="table-item-left" onClick={this.handleClick}>
                    <img src={image} alt=""/>
                     <span>{name}</span>
                </div>
                <div className="table-item-right">
                    <div className="table-current-price">${current_price}</div>
                    <div className="table-market-cap-rank">{market_cap_rank}</div>
                    <div className="table-roi">{atl_change_percentage.toFixed(2)}%</div>
                    <div className="table-ath">${ath}</div>
                    <button className="table-delete-btn" onClick={() => this.deleteTicker()}>Delete Ticker</button>
                </div>
            </div>
        )
    }
}

export default withRouter(TableItem);