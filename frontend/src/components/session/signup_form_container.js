import { connect } from "react-redux";
import {
  signup,
  clearSessionErrors,
  login,
} from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
);
