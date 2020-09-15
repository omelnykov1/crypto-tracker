import React from 'react';
import TableItem from './table_item';
import { withRouter } from 'react-router-dom';
import { Loader } from '../util/loader';
import TableParticles from './table_particles';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.currentUser.id,
            tickers: [],
            loading: true
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

    getIcons() {
        if (this.props.table.tickers) {
            return this.props.table.tickers.map(ticker => ticker.image)
        }
    }

    render() {
        setTimeout(() => this.setState({loading: false}), 1700)

        return this.state.loading ? < Loader loading={this.state.loading} /> : (
            <div className="table-container">
                < TableParticles images={this.getIcons()}/>
                <div className="table-wrapper">
                    <h1>Favorite Tickers</h1>
                    <div className="table-labels">
                        <div className="table-labels-left">
                            <span>Name</span>
                        </div>
                        <div className="table-labels-right">
                            <span>Current Price</span>
                            <span>#</span>
                            <span>Total ROI</span>
                            <span>All Time High</span>
                        </div>
                    </div>
                    {this.renderTickers()}
                </div>
            </div>
        )
    }
}

export default withRouter(Table);