import React from 'react';
import TableItem from './table_item';
import TableLoader from './table_loader';
import { withRouter } from 'react-router-dom';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.currentUser.id,
            tickers: []
        }
        this.handleTickers = this.handleTickers.bind(this);
        this.destroyTable = this.destroyTable.bind(this);
    }

    componentDidMount() {
        this.props.fetchTable(this.props.currentUser.id)
    }

    destroyTable() {
        this.props.deleteTable(this.props.table._id)
            .then(this.handleTickers());
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    handleTickers() {
        this.props.history.push('/tickers');
    }

    render() {
        if (this.props.table.tickers) {
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
            const content = Object.values(this.props.table).length && this.props.table.tickers.length ? 
                <div className="table-wrapper">
                    <h1>Favorite Tickers</h1>
                    { tickers }
                    < TableLoader loading={loadingOrNot} />
                </div>
                :
                <div>
                    <h1>No favorite tickers yet</h1>
                    <button onClick={this.handleTickers}>All tickers</button>
                </div>;
            return (
                <div>
                {content}
                </div >
            )
        } 
        return null;;
    }
}

export default withRouter(Table);