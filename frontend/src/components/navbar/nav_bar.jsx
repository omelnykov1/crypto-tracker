import React from "react";
import { logout } from "../../actions/session_actions";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const history = useHistory();
  // mSTP && mDTP
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.session.isAuthenticated);
  const currentUser = useSelector(state => state.session.user);
  // eventHandlers
  const handleMain = () =>  history.push("/");
  const handleTable = () => history.push(`/tables/user/${currentUser.id}`);
  const handleLogin = () => history.push('/login');
  const handleSignup = () => history.push('/signup');

  const loginToggle = loggedIn ? (
    <div className="right-nav">
      <div className="left-right-nav" onClick={() => dispatch(logout())}>
        <button className="logout">Logout</button>
      </div>
      <div className="right-right-nav" onClick={handleTable}>
          <button className="profile">My Favorites</button>
      </div>
    </div>
  ) : (
    <div className="right-nav">
      <div className="left-right-nav">
          <button className="login" onClick={handleLogin}>Log In</button>
      </div>
      <div className="right-right-nav">
          <button className="signup" onClick={handleSignup}>Sign Up</button>
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
              onClick={handleMain}
            />
        </div>
        {loginToggle}
      </div>
    </header>
  );
}

export default NavBar;