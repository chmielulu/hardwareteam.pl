import React from "react";
import BasicTemplate from "@templates/BasicTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "@routes/";
import IndexView from "./Index/Index";
import LoginView from "./Login/Login";
import RegisterView from "./Register/Register";
import CategoryView from "./Category/Category";
import View404 from "./404/404";

const Root = () => (
  <BasicTemplate>
    <Router>
      <Switch>
        <Route exact path={routes.index}>
          <IndexView />
        </Route>
        <Route path={routes.login}>
          <LoginView />
        </Route>
        <Route path={routes.register}>
          <RegisterView />
        </Route>
        <Route exact path={routes.category}>
          <CategoryView />
        </Route>
        <Route path={routes.notFound}>
          <View404 />
        </Route>
        <Route>
          <Redirect to={routes.notFound} />
        </Route>
      </Switch>
    </Router>
  </BasicTemplate>
);

export default Root;
