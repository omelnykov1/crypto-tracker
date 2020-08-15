import React from 'react';

class TableItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        const {ath, current_price,name,image, market_cap_rank, atl_change_percentage} = this.props.ticker;
        return(
            <div>
                <div>
                    <img src={image} alt=""/>
                     <span>{name}</span>
                </div>
                <div>
                    <p>${current_price}</p>
                    <p>{market_cap_rank}</p>
                    <p>ROI:<span>{atl_change_percentage}%</span></p>
                    <p>{ath}</p>
                </div>
            </div>
        )
    }
}

export default TableItem;