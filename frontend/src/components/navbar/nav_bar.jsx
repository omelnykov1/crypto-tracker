import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMain = this.handleMain.bind(this);
    this.handleTable = this.handleTable.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleMain() {
    this.props.history.push("/");
  }

  handleTable() {
    this.props.history.push(`/tables/user/${this.props.currentUser.id}`);
  }

  handleLogin() {
    this.props.history.push('/login')
  }

  handleSignup() {
    this.props.history.push('/signup')
  }

  render() {
    const { loggedIn } = this.props;
    const loginToggle = loggedIn ? (
      <div className="right-nav">
        <div className="left-right-nav" onClick={() => this.props.logout()}>
          <button className="logout">Logout</button>
        </div>
        <div className="right-right-nav" onClick={() => this.handleTable()}>
            <button className="profile">My Favorites</button>
        </div>
      </div>
    ) : (
      <div className="right-nav">
        <div className="left-right-nav">
            <button className="login" onClick={() => this.handleLogin()}>Log In</button>
        </div>
        <div className="right-right-nav">
            <button className="signup" onClick={() => this.handleSignup()}>Sign Up</button>
        </div>
      </div>
    );
    return (
      <header>
        <div className="navbar">
          <div className="left-nav">
              <img 
                style={{width: "13%", height: "120%", marginLeft: "1vw", marginTop: "-0.3vw"}}
                src={"/images/logo_transparent.png"} 
                alt="" 
                id="logo-logo" 
                onClick={this.handleMain}
              />
          </div>
          {loginToggle}
        </div>
      </header>
    );
  }
}


export default withRouter(NavBar);