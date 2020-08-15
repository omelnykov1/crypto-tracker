import React from 'react';


class Table extends React.Component {
    constructor(props) {
        super(props)
        this.addBtc = this.addBtc.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchTable(this.props.currentUser.id);
        this.props.fetchTickers();
        let btn = document.getElementById('btn')
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
        this.props.table[0].tickers.push('eos');
        debugger
        if (this.props.currentUser) {
            this.props.changeTable(this.props.table[0]).then(this.props.fetchTable(this.props.currentUser.id));
        };
    };

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
            const addBtn = <button id="add-update-btn" className="add-btn" type="submit" onClick={this.handleAdd}>Create Table</button>
            const changeBtn = <button id="add-update-btn" className="add-btn" type="submit" onClick={this.handleUpdate}>Add to your table</button>
            const btn = !this.props.table.length ? addBtn : changeBtn;
            return (
                <div>
                    <h1>Table</h1>
                    {
                        this.props.tickers.map(ticker => (
                            ticker.name
                        ))
                    }
                    <button id="btn" onClick={this.addBtc}>add btc</button>
                {btn}
                </div>
            )
        } 
        return null;;
    }
}

export default Table;