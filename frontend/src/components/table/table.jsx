import React from 'react';
import TableItem from './table_item';
import TableLoader from './table_loader'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.addBtc = this.addBtc.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleUp = this.handleUp.bind(this);
        this.destroyTable = this.destroyTable.bind(this);
        this.state = {
            user: this.props.currentUser.id,
            tickers: []
        }
    }

    componentDidMount() {
        this.props.fetchTable(this.props.currentUser.id)
        this.props.fetchTickers();
    }

    handleAdd(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.createTable(this.state).then(this.props.fetchTable(this.props.currentUser.id));
        };
    };

    handleUpdate(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.fetchTableTicker('algorand').then(t => {
                this.props.table.tickers.push(t);
                return this.props.changeTable(this.props.table); 
            }).then(this.props.fetchTable(this.props.currentUser.id))
        };
    };


    handleUp(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.fetchTableTicker('iota').then(t => {
                this.props.table.tickers.push(t);
                return this.props.changeTable(this.props.table);
            }).then(this.props.fetchTable(this.props.currentUser.id))
        };
    };

    

    addBtc() {
        const tickers = [{
            "id": "bitcoin",
            "symbol": "btc",
            "name": "Bitcoin",
            "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            "current_price": 11854.88,
            "market_cap": 218864571618,
            "market_cap_rank": 1,
            "fully_diluted_valuation": null,
            "total_volume": 20610104794,
            "high_24h": 11959.83,
            "low_24h": 11722.46,
            "price_change_24h": 68.79,
            "price_change_percentage_24h": 0.58368,
            "market_cap_change_24h": 939951023,
            "market_cap_change_percentage_24h": 0.43132,
            "circulating_supply": 18461743,
            "total_supply": 21000000,
            "max_supply": null,
            "ath": 19665.39,
            "ath_change_percentage": -39.71627,
            "ath_date": "2017-12-16T00:00:00.000Z",
            "atl": 67.81,
            "atl_change_percentage": 17382.97859,
            "atl_date": "2013-07-06T00:00:00.000Z",
            "roi": null,
            "last_updated": "2020-08-15T18:01:08.764Z"
        }];
        this.setState({tickers});
    }

    destroyTable() {
        this.props.deleteTable(this.props.table._id)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    render() {
        if (this.props.tickers.length) {
            const addBtn = <button id="add-update-btn" className="add-btn" type="submit" onClick={this.handleAdd}>Create Table</button>
            const changeBtn = <button id="add-update-btn" className="add-btn" type="submit" onClick={this.handleUpdate}>Add to your table</button>
            const btn = (!this.props.table.tickers) ? addBtn : changeBtn;
            const deleteBtn = btn === addBtn ? null : <button id="delete-btn" className="delete-btn" type="submit" onClick={this.destroyTable}>delete table</button>
            const tickers = (!this.props.table.tickers) ? null :
                this.props.table.tickers.map(ticker => (
                    <TableItem 
                        ticker={ticker} 
                        key={ticker.id} 
                        table={this.props.table}
                        changeTable={this.props.changeTable}
                    />
                ));
            const loadingOrNot = !this.props.table.tickers ? true : false;
            return (
                <div>
                    <h1>Table</h1>
                    <button id="btn" onClick={this.addBtc}>add btc</button>
                    {tickers}
                    {btn}
                    {deleteBtn}
                    <button type="submit" onClick={this.handleUp}>add iota</button>
                    < TableLoader loading={loadingOrNot}/>
                </div>
            )
        } 
        return null;;
    }
}

export default Table;