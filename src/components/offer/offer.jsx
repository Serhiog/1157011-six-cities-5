import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MainPage from "../main-page/main-page";
import ReviewList from "../review-list/review-list";
import {fetchHotelReviews} from "../../store/api-actions";
import Map from "../map/map";
import NearbyOffersList from "../nearby-offers-list/nearby-offers-list";
import {connect} from "react-redux";
import {getCurrentOffer, getNearbyOffers} from "../../store/offers/selectors";
import {PropTypes4Offer} from "../../propConsts";

const Offer = ({noLogged = true, actualOffer, offers, getReviews}) => {

  useEffect(() => {
    getReviews(actualOffer.id);
  }, []);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={<MainPage />}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>

                    {noLogged ? (
                      <span className="header__login">Sign in</span>
                    ) : (
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    )}
                  </Link>
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
              {actualOffer.images.map((photo, i) => {
                return (
                  <div key={i} className="property__image-wrapper">
                    <img
                      className="property__image"
                      src={photo}
                      alt={actualOffer.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {actualOffer.is_premium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : (
                ``
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{actualOffer.description}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: actualOffer.rating * 10}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {actualOffer.rating * 10}
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
                <b className="property__price-value">€{actualOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {actualOffer.goods.map((feature, i) => {
                    return (
                      <li key={i} className="property__inside-item">
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={actualOffer.host.avatar_url}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {actualOffer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <ReviewList offer={actualOffer} />
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers} />
          </section>
        </section>
        <div className="container">
          <NearbyOffersList offers={offers} actualOffer={actualOffer} />
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  noLogged: PropTypes.bool,
  actualOffer: PropTypes.shape(PropTypes4Offer),
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  getReviews: PropTypes.func.isRequired
};


const mapToStateProps = (state) => ({
  actualOffer: getCurrentOffer(state),
  offers: getNearbyOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(offerId) {
    dispatch(fetchHotelReviews(offerId));
  },
});

export {Offer};
export default connect(mapToStateProps, mapDispatchToProps)(Offer);
