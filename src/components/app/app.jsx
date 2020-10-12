import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import EmptyMainPage from "../empty-main-page/empty-main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import EmptyFavorites from "../empty-favorites/empty-favorites";
import Offer from "../offer/offer";
import {PropTypes4Offer} from "../../propConsts";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/"
          render={({history}) => (
            < MainPage
              goToFavorites={() => history.push(`/favorites`)}
              offers={offers}
            />
          )}
        />

        <Route exact path="/main-empty">
          <EmptyMainPage />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/offer-not-logged">
          <Offer
            noLogged={true}
            offer={offers[0]}
          />
        </Route>

        <Route exact path="/favorites">
          <Favorites
            offers={offers} />
        </Route>

        <Route exact path="/favorites-empty">
          <EmptyFavorites />
        </Route>

        <Route exact path="/offer/:id?"
          render={({history}) => (
            < Offer
              noLogged={false}
              offer={offers[0]}
              history={history}
            />
          )}
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
    </BrowserRouter >

  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer))
};

export default App;
