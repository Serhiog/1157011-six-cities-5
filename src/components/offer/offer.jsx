import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, Router } from "react-router-dom";
import ReviewList from "../review-list/review-list";
import {
  fetchHotelReviews,
  fetchNearbyOffersList,
} from "../../store/api-actions";
import Map from "../map/map";
import OfferList from "../offers-list/offer-list";
import { connect } from "react-redux";
import { getCurrentOffer, getNearbyOffers } from "../../store/offers/selectors";
import { PropTypes4Offer } from "../../propConsts";
import FavoriteButton from "../favorite-btn/favorite-btn";
import { AuthorizationStatus } from "../../consts";

const Offer = ({
  offer,
  nearbyOffers,
  actualOffer,
  getReviews,
  reviews,
  authorizationStatus,
  isLogged,
  email,
  param,
  goToFavorites,
  getNearbyOffers,
}) => {
  useEffect(() => {
    getReviews(actualOffer.id, param);
    getNearbyOffers(actualOffer.id);
  }, []);

  const ratingOfferPercent = Math.round(actualOffer.rating) * 20;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Router history={history}>
                <Link className="header__logo-link" to={`/`}>
                  <img
                    className="header__logo"
                    src="/img/logo.svg"
                    alt="6 cities logo"
                    width={81}
                    height={41}
                  />
                </Link>
              </Router>
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
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {actualOffer.images
                .map((picture, i) => (
                  <div className="property__image-wrapper" key={i}>
                    <img
                      className="property__image"
                      src={picture}
                      alt="Place image"
                    />
                  </div>
                ))
                .slice(0, 6)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {actualOffer.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : (
                ``
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{actualOffer.title}</h1>

                <FavoriteButton
                  offer={actualOffer}
                  classCard={`property`}
                  auth={authorizationStatus === AuthorizationStatus.AUTH}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${ratingOfferPercent}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {actualOffer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {actualOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {actualOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {actualOffer.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">
                  &euro;{actualOffer.price}
                </b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {actualOffer.goods.map((thing, i) => (
                    <li className="property__inside-item" key={i}>
                      {thing}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={
                      actualOffer.host.is_pro
                        ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                        : `property__avatar-wrapper user__avatar-wrapper`
                    }
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={`/` + actualOffer.host.avatar_url}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {actualOffer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{actualOffer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={reviews} />
              </section>
            </div>
          </div>

          <Map
            forOffer={true}
            mainOffer={offer}
            offers={nearbyOffers}
            classMap={`property__map`}
            cityCoordinates={[
              +offer.city.location.latitude,
              +offer.city.location.longitude,
            ]}
            mapZoom={+offer.city.location.zoom}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>

            <OfferList
              offers={nearbyOffers}
              classList={`near-places__list`}
              classCard={`near-places__card`}
              classImageWrapper={`near-places__image-wrapper`}
              forFavorites={true}
              nearby={true}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  noLogged: PropTypes.bool,
  actualOffer: PropTypes.shape(PropTypes4Offer),
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  getReviews: PropTypes.func.isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  offer: PropTypes.shape(PropTypes4Offer),
  reviews: PropTypes.array,
  authorizationStatus: PropTypes.string.isRequired,
  isLogged: PropTypes.any,
  email: PropTypes.string,
  param: PropTypes.string,
  goToFavorites: PropTypes.func.isRequired,
  getNearbyOffers: PropTypes.any,
};

const mapToStateProps = (state) => ({
  actualOffer: getCurrentOffer(state),
  authorizationStatus: state.user.authorizationStatus,
  isLogged: state.user.authorizationStatus,
  email: state.user.email,
  reviews: state.offers.comments,
  nearbyOffers: getNearbyOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(offerId, param) {
    dispatch(fetchHotelReviews(offerId, param));
  },
  getNearbyOffers(offerId) {
    dispatch(fetchNearbyOffersList(offerId));
  },
});

export { Offer };
export default connect(mapToStateProps, mapDispatchToProps)(Offer);
