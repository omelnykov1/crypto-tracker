import React from 'react';
import TableItem from './table_item';


class Table extends React.Component {
    constructor(props) {
        super(props)
        this.addBtc = this.addBtc.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.destroyTable = this.destroyTable.bind(this);
        this.getTickers = this.getTickers.bind(this);
        this.state = {
            user: this.props.currentUser.id,
            tickers: []
        }
    }

    componentDidMount() {
        debugger
        this.props.fetchTable(this.props.currentUser.id)
        this.props.fetchTickers();
    }

    getTickers(e) {
        e.preventDefault();
        if (this.props.table.tickers) {
            this.props.fetchTableTickers(this.props.table);
        };
    }

    handleAdd(e) {
        e.preventDefault();
        debugger
        if (this.props.currentUser) {
            this.props.createTable(this.state).then(this.props.fetchTable(this.props.currentUser.id));
        };
    };

    handleUpdate(e) {
        e.preventDefault();
        this.props.table.tickers.push('litecoin');
        debugger
        if (this.props.currentUser) {
            this.props.changeTable(this.props.table).then(this.props.fetchTable(this.props.currentUser.id));
        };
    };

    addBtc() {
        const tickers = ['ripple'];
        this.setState({tickers});
    }

    destroyTable() {
        this.props.deleteTable(this.props.table._id)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    render() {
        debugger
        if (this.props.tickers.length) {
            const addBtn = <button id="add-update-btn" className="add-btn" type="submit" onClick={this.handleAdd}>Create Table</button>
            const changeBtn = <button id="add-update-btn" className="add-btn" type="submit" onClick={this.handleUpdate}>Add to your table</button>
            const btn = (!this.props.table.tickers) ? addBtn : changeBtn;
            const deleteBtn = btn === addBtn ? null : <button id="delete-btn" className="delete-btn" type="submit" onClick={this.destroyTable}>delete table</button>
            const tickers = (!this.props.table.tickers) ? null :
                this.props.table.tickers.map(ticker => (
                    <TableItem ticker={ticker} key={ticker.id}/>
                ));
            return (
                <div>
                    <h1>Table</h1>
                    <button id="btn" onClick={this.addBtc}>add btc</button>
                {tickers}
                {btn}
                {deleteBtn}
                <button onClick={this.getTickers}>Get tickers</button>
                </div>
            )
        } 
        return null;;
    }
}

export default Table;