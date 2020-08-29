import React from 'react';
import TableItem from './table_item';
import TableLoader from './table_loader'

class Table extends React.Component {
    constructor(props) {
        super(props)
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
                <div className="table-wrapper">
                    <h1>Favorite Tickers</h1>
                    {tickers}
                    < TableLoader loading={loadingOrNot}/>
                </div>
            )
        } 
        return null;;
    }
}

export default Table;