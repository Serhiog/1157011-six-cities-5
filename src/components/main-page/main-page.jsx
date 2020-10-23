import React from "react";
import {PropTypes4Offer} from "../../propConsts";
import PropTypes from "prop-types";
import OfferList from "../offers-list/offer-list";
import Map from "../map/map";
import {MapSizes} from "../../consts";

const MainPage = ({offers, goToFavorites}) => {

  const unicCities = [
    ...new Set(
        offers.map((offer) => {
          return offer.city;
        })
    ),
  ];

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
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {unicCities.map((unicCity, i) => {
                return (
                  <li key={i} className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>{unicCity}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList offers={offers} />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} mapSize={MapSizes.mainPage} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  goToFavorites: PropTypes.func,
};

export default MainPage;
