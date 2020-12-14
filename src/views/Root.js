import React from "react";
import BasicTemplate from "@templates/BasicTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "@routes/";
import { Provider } from "react-redux";
import createStore from "@store";
import { PersistGate } from "redux-persist/integration/react";
import IndexView from "./Index/Index";
import LoginView from "./Login/Login";
import RegisterView from "./Register/Register";
import CategoryView from "./Category/Category";
import View404 from "./404/404";
import ArticleView from "./Article/Article";
import ProductsView from "./Products/Products";
import BasketView from "./Basket/Basket";

const Root = () => {
  const { store, persistor } = createStore();

  return (
    <BasicTemplate>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
              <Route exact path={routes.article}>
                <ArticleView />
              </Route>
              <Route exact path={routes.products}>
                <ProductsView />
              </Route>
              <Route exact path={routes.basket}>
                <BasketView />
              </Route>
              <Route path={routes.notFound}>
                <View404 />
              </Route>
              <Route>
                <Redirect to={routes.notFound} />
              </Route>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </BasicTemplate>
  );
};

export default Root;
