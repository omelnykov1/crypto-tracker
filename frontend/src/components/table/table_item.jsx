import React from 'react';

class TableItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTicker = this.deleteTicker.bind(this);
    }

    deleteTicker(tickerName) {
        const filtered = this.props.table.tickers.filter(ticker => ticker.id !== tickerName)
        this.props.table.tickers = filtered
        this.props.changeTable(this.props.table)
    }

    render() {
        const {ath, current_price,name,image, market_cap_rank, atl_change_percentage} = this.props.ticker;
        return(
            <div className="table-item-container">
                <div className="table-item-left">
                    <img src={image} alt=""/>
                     <span>{name}</span>
                </div>
                <div className="table-item-right">
                    <p>${current_price}</p>
                    <p>{market_cap_rank}</p>
                    <p>ROI:<span>{atl_change_percentage}%</span></p>
                    <p>{ath}</p>
                    <button onClick={() => this.deleteTicker(this.props.ticker.id)}>Delete Ticker</button>
                </div>
            </div>
        )
    }
}

export default TableItem;