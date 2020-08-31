import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { fetchTable } from '../../actions/table_actions';

const mapStateToProps = (state) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    table: state.entities.table[Object.keys(state.entities.table)[0]] ? state.entities.table[Object.keys(state.entities.table)[0]] : {},
});

const mapDispatchToProps = () => (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchTable: userId => dispatch(fetchTable(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);