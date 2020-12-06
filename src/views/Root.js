import React from "react";
import BasicTemplate from "@templates/BasicTemplate";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "@routes/";
import Index from "./Index/Index";

const Root = () => (
  <BasicTemplate>
    <Router>
      <Switch>
        <Route exact path={routes.index}>
          <Index />
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
