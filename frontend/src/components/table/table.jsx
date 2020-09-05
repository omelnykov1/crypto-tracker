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

    renderTickers() {
        let tickers;
        if (this.props.table.tickers) {
            tickers = (!this.props.table.tickers) ? null :
                this.props.table.tickers.map(ticker => (
                    <TableItem 
                        ticker={ticker} 
                        key={ticker.id} 
                        table={this.props.table}
                        changeTable={this.props.changeTable}
                    />
            ));
        }
        return tickers;
    }


    render() {
        const isLoading = !this.props.table.tickers ? true : false;
        return (
            <div className="table-wrapper">
                <h1>Favorite Tickers</h1>
                {this.renderTickers()}
                < TableLoader loading={isLoading} />
            </div>
        )
    }
}

export default withRouter(Table);