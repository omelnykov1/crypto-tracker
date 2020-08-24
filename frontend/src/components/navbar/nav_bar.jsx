import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMain = this.handleMain.bind(this);
  }

  handleMain() {
    this.props.history.push("/");
  }

  render() {
    const { currentUser } = this.props;
    const loginToggle = currentUser ? (
      <div className="right-nav">
        <div className="left-right-nav" onClick={() => this.props.logout()}>
          <button className="logout">Logout</button>
        </div>
        <div className="right-right-nav">
          <div className="profile"><i className="far fa-user"></i></div>
        </div>
      </div>
    ) : (
      <div className="right-nav">
        <div className="left-right-nav">
          <Link to="/login">
            <button className="login">Log In</button>
          </Link>
        </div>
        <div className="right-right-nav">
          <Link to="/signup">
            <button className="signup">Sign Up</button>
          </Link>
        </div>
      </div>
    );
    return (
      <header>
        <div className="navbar">
          <div className="left-nav">
            <div className="logo" onClick={this.handleMain}>
              Cool Logo
            </div>
          </div>
          <div>{loginToggle}</div>
        </div>
      </header>
    );
  }
}


export default withRouter(NavBar);