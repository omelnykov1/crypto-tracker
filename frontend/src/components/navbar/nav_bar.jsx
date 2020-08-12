import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMain = this.handleMain.bind(this);
  }

  handleClick() {
    this.props.logout().then(this.props.history.push("/"));
  }

  handleMain() {
    debugger
    this.props.history.push("/");
  }

  render() {
    debugger
    const { currentUser, logout } = this.props;
    const loginToggle = currentUser ? (
      <div className="right-nav">
        <div className="logout" onClick={this.handleClick}>
          Logout
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