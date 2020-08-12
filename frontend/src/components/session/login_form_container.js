import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.user,
    demoUser: {
      email: "crypto_demo",
      password: "demo123",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
