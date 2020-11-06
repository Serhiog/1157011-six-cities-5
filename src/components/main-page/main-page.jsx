import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offers-list/offer-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import {PropTypes4Offer} from "../../propConsts";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getSortedOffers} from "../../store/selectors";

const MainPage = ({goToFavorites, offers}) => {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a
                className="header__logo-link header__logo-link--active"
                href="#"
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                    onClick={goToFavorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList offers={offers}/>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  goToFavorites: PropTypes.func,
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
};


const mapToStateProps = (state) => ({
  offers: getSortedOffers(state),
  // city: getCurrentCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleOfferCard(payload) {
    dispatch(ActionCreator.handleOfferCard(payload));
  },
});

export {MainPage};
export default connect(mapToStateProps, mapDispatchToProps)(MainPage);
