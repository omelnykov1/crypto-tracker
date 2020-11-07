import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import MainPage from "./main/main_page";
import LoginForm from "./session/login_form";
import SignupForm from "./session/signup_form";
import NavBar from './navbar/nav_bar';
import TickerContainer from './crypto/ticker/ticker_container';
import TickerIndexContainer from './crypto/ticker_index_container';
import TableContainer from './table/table_container';

const App = () => (
  <div className="root-wrapper">
    <NavBar />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/tickers" component={TickerIndexContainer} />
      <Route path={`/tickers/:tickerId`} component={TickerContainer}/>
      <ProtectedRoute path='/tables' component={TableContainer}/>
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />
    </Switch>
  </div>
);

export default App;
