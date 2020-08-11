import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.logout().then(this.props.history.push("/"));
  }

  render() {
    const { currentUser, logout, openModal } = this.props;
    const loginToggle = currentUser ? (
      <div className="right-nav">
        <div className="logout" onClick={this.handleClick}>
          Logout
        </div>
        <div className="profile">Profile</div>
      </div>
    ) : (
      <div className="right-nav">
        <div className="login" onClick={() => openModal("login")}>
          Login
        </div>
        <div className="signup" onClick={() => openModal("signup")}>
          Signup
        </div>
      </div>
    );
    return (
      <header>
        <div className="navbar">
          <div className="left-nav">
            <div className="logo">Somelogo</div>
          </div>
          <div>{loginToggle}</div>
        </div>
      </header>
    );
  }
}


export default NavBar;