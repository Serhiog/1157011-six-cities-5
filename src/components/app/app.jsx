import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import EmptyMainPage from "../empty-main-page/empty-main-page";
import Login from "../login/login";
import OfferNotLogged from "../offer-not-logged/offer-not-logged";
import Favorites from "../favorites/favorites";
import EmptyFavorites from "../empty-favorites/empty-favorites";
import Offer from "../offer/offer";

const App = (props) => {
  const { countOffers, offers } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            countOffers={countOffers}
            offers={offers}
          />
        </Route>
        <Route exact path="/main-empty">
          <EmptyMainPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/offer-not-logged">
          <OfferNotLogged />
        </Route>
        <Route path="/offer/:id?" exact component={Offer} />
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/favorites-empty">
          <EmptyFavorites />
        </Route>
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
  countOffers: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
