import React from "react";
import BasicTemplate from "@templates/BasicTemplate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "@routes/";
import Index from "./Index/Index";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Root = () => (
  <BasicTemplate>
    <Router>
      <Switch>
        <Route exact path={routes.index}>
          <Index />
        </Route>
        <Route exact path={routes.login}>
          <Login />
        </Route>
        <Route exact path={routes.register}>
          <Register />
        </Route>
        <Route>
          <h1>Ooops! 404 Not Found!</h1>
          <Link to="/">Go to home</Link>
        </Route>
      </Switch>
    </Router>
  </BasicTemplate>
);

export default Root;
