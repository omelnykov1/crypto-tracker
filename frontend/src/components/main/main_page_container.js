import { connect } from 'react-redux'
import { fetchTickers } from '../../actions/crypto_actions'
import MainPage from './main_page'

const mSTP = state => ({
    tickers: state.entities.cryptos,
})

const mDTP = dispatch => ({
    fetchTickers: () => dispatch(fetchTickers()),
})

export default connect(mSTP,mDTP)(MainPage);