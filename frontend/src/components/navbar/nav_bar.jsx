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
    debugger
    const { currentUser } = this.props;
    const loginToggle = currentUser ? (
      <div className="right-nav">
        <div className="logout" onClick={() => this.props.logout()}>
          <button className="navbar-button">Logout</button>
        </div>
        <div className="profile">Profile</div>
      </div>
    ) : (
      <div className="right-nav">
        <Link to="/login">
          <button className="navbar-button">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="navbar-button">Sign Up</button>
        </Link>
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