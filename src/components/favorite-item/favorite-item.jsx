import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import OfferList from "../offers-list/offer-list";
import {AppRoute} from "../../consts";

const getCityOffers = (offers, cityName) =>
  offers.slice().filter((offer) => offer.city.name === cityName);

const FavoriteItem = ({offers}) => {
  const cities = [...new Set(offers.map((offer) => offer.city.name))];
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city, i) => (
              <li className="favorites__locations-items" key={`${city}-${i}`}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link
                      to={AppRoute.ROOT}
                      className="locations__item-link"
                      href="#"
                    >
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <OfferList
                  offers={getCityOffers(offers, city)}
                  classList={`favorites__places`}
                  classCard={`favorites__card`}
                  classImageWrapper={`favorites__image-wrapper`}
                  forFavorites={true}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoriteItem.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export {FavoriteItem};
export default FavoriteItem;
