import React from "react";
import PropTypes from "prop-types";
import OfferList from "../offers-list/offer-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import MainEmpty from "../main-empty/main-empty";
import {connect} from "react-redux";
import {getFiltredByCityOffers} from "../../store/offers/selectors";
import {PropTypes4Offer} from "../../propConsts";
import {AuthorizationStatus} from "../../consts";

const MainPage = ({ goToFavorites, offers, isLogged, email }) => {
  const city = offers[0].city
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
                    onClick={goToFavorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {isLogged === AuthorizationStatus.AUTH
                        ? email
                        : `Sign In`}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main
        className={`${
          !offers.length ? `page__main--index-empty` : ``
        } page__main page__main--index `}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        {!offers.length ? (
          <MainEmpty />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <OfferList
                offers={offers}
                classList={`cities__places-list tabs__content`}
                classCard={`cities__place-card`}
                classImageWrapper={`cities__image-wrapper`}
              />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                    classMap={`cities__map`}
                    cityCoordinates={[
                      city.location.latitude,
                      city.location.longitude,
                    ]}
                    mapZoom={city.location.zoom}
                  />
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

MainPage.propTypes = {
  goToFavorites: PropTypes.func,
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  isLogged: PropTypes.string,
  email: PropTypes.string.isRequired,
};

const mapToStateProps = (state) => ({
  offers: getFiltredByCityOffers(state),
  isLogged: state.user.authorizationStatus,
  email: state.user.email,
});

export {MainPage};
export default connect(mapToStateProps)(MainPage);
