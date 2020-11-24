import React, {Fragment} from "react";
import {Router, Switch, Route, Link} from "react-router-dom";
import MainPage from "../main-page/main-page";
import EmptyMainPage from "../empty-main-page/empty-main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import EmptyFavorites from "../empty-favorites/empty-favorites";
import Offer from "../offer/offer";
import history from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../consts";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={({}) => (
            <MainPage goToFavorites={() => history.push(`/favorites`)} />
          )}
        />
        <Route exact path="/main-empty">
          <EmptyMainPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute
          exact path={AppRoute.FAVORITES}
          render={() => {
            return <Favorites />;
          }}
        />
        <Route exact path="/favorites-empty">
          <EmptyFavorites />
        </Route>
        <Route
          exact
          path="/offer/:id"
          render={({}) => {
            return <Offer />;
          }}
        />
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
