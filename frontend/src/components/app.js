import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import MainPage from "./main/main_page";
import Modal from "./modal/modal";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from './navbar/nav_bar_container';
import TickerContainer from './crypto/ticker/ticker_container';
import TickerIndexContainer from './crypto/ticker_index_container';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/tickers" component={TickerIndexContainer} />
      {/* < Route path={`/cryptos/tickerId`} component={TickerContainer}/> */}
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
