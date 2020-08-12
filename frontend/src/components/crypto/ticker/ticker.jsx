import React from 'react';

class Ticker extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchTicker(this.props.match.params.tickerId);
    }

    render() {
        debugger
        if (this.props.ticker) {
            const {
              image,
            //   market_data,
            //   market_cap_rank,
            //   contract_address,
            //   links,
              name,
            } = this.props.ticker;
              return (
                <div>
                  <div>
                    <h1>{name}</h1>
                    <img src={image.thumb} alt=""/>
                    <div>${this.props.ticker.market_data.current_price.usd}</div>
                  </div>
                  <div>
                    <p>{this.props.ticker.description.en}</p>
                  </div>
                </div>
              );
        } else {
            return null;
        }
    }
}

export default Ticker;