import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMain = this.handleMain.bind(this);
    this.handleTable = this.handleTable.bind(this);
  }

  handleMain() {
    this.props.history.push("/");
  }

  handleTable() {
    this.props.history.push(`/tables/user/${this.props.currentUser.id}`);
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
              <img 
                style={{width: "43%", height: "120%", marginLeft: "-5vw", marginTop: "-0.9vw"}}
                src={"/images/facebook_cover_photo_2.png"} 
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