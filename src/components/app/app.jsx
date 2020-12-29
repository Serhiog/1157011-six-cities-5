import React, {Fragment} from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import MainPage from "../main-page/main-page";
import EmptyMainPage from "../empty-main-page/empty-main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import EmptyFavorites from "../empty-favorites/empty-favorites";
import Offer from "../offer/offer";
import history from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../consts";
import {connect} from "react-redux";
import {getOffers} from "../../store/offers/selectors";
import PropTypes from "prop-types";
import {PropTypes4ServerOffer} from "../../propConsts";

const App = ({offers}) => {
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
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return <Favorites />;
          }}
        />
        <Route exact path="/favorites-empty">
          <EmptyFavorites />
        </Route>
        <Route
          exact
          path={AppRoute.OFFER_ID}
          render={({match}) => {
            const offer = offers.find((item) => +item.id === +match.params.id);
            return <Offer offer={offer} param={match.params.id} goToFavorites={() => history.push(`/favorites`)}/>;
          }}
        />
        <Route
          render={() => (
            <Redirect to={AppRoute.ROOT} />
          )}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4ServerOffer)).isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

export {App};
export default connect(mapStateToProps)(App);
