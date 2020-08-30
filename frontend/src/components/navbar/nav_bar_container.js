import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
}};

const mapDispatchToProps = () => (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);