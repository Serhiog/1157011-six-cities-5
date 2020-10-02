import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import EmptyMainPage from "../empty-main-page/empty-main-page";
import Login from "../login/login";
import OfferNotLogged from "../offer-not-logged/offer-not-logged";
import Favorites from "../favorites/favorites";
import EmptyFavorites from "../empty-favorites/empty-favorites";
import Offer from "../offer/offer";

const App = (props) => {
  const { countOffers } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage countOffers={countOffers} />
        </Route>
        <Route exact path="/empty-main">
          <EmptyMainPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/offer-not-logged">
          <OfferNotLogged />
        </Route>
        <Route exact path="/offer">
          <Offer />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/empty-favorites">
          <EmptyFavorites />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
};

export default App;
