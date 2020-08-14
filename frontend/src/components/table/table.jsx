import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: this.props.currentUser.id,
            tickers: [],
        }
        this.addBtc = this.addBtc.bind(this);
    }

    componentDidMount() {
        this.props.fetchTable(this.props.currentUser.id);
        this.props.fetchTickers();
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        if (this.props.currentUser) {
            this.props.createTable(this.state).then(this.props.fetchTable());
        };
    }
    addBtc() {
        const tickers = ['bitcoin'];
        this.setState({tickers});
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    render() {
        debugger
        if (this.props.tickers.length) {
            return (
                <div>
                    <h1>Table</h1>
                    {
                        this.props.tickers.map(ticker => (
                            ticker.name
                        ))
                    }
                    <button onClick={this.addBtc}>add btc</button>
                    <button className="add-btn" type="submit" onClick={this.handleSubmit}>Add</button>
                </div>
            )
        } 
        return null;;
    }
}

export default Table;