import React from "react";
import { PropTypes4Offer } from "../../propConsts";
import PropTypes from "prop-types";
import { Link, Router } from "react-router-dom";
import FavoriteButton from "../favorite-btn/favorite-btn";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { AuthorizationStatus } from "../../consts";

const Card = ({
  offer,
  offerId,
  handleOfferCard,
  nearby,
  classCard,
  classImageWrapper,
  authorizationStatus,
}) => {
  const widthImg = classCard !== `favorites__card` ? 260 : 150;
  const heightImg = classCard !== `favorites__card` ? 200 : 110;
  return (
    <article
      data-id={offerId}
      className={`${nearby ? `near-places__card` : `${classCard}`} place-card`}
      onMouseOver={(evt) =>
        handleOfferCard(
          evt.target.closest(
            `.${nearby ? `near-places__card` : `${classCard}`}`
          ).dataset.id
        )
      }
    >
      {offer.is_premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div
        className={`${
          nearby ? `near-places__image-wrapper` : `${classImageWrapper}`
        } place-card__image-wrapper`}
      >
        <Router history={history}>
          <Link to={`/offer/${offerId}`}>
            <img
              className="place-card__image"
              src={offer.preview_image}
              width={widthImg}
              height={heightImg}
              alt={offer.title}
            />
          </Link>
        </Router>
      </div>
      <div
        className={`${
          classCard === `favorites__card` ? `favorites__card-info` : ``
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton
            offer={offer}
            classCard={`place-card`}
            auth={authorizationStatus === AuthorizationStatus.AUTH}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: offer.rating * 10 }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
  handleOfferCard: PropTypes.func,
  offerId: PropTypes.number,
  classNameArticle: PropTypes.string,
  classNameImageWrapper: PropTypes.string,
  nearby: PropTypes.bool,
  classCard: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string,
};

const mapToStateProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  handleOfferCard(payload) {
    dispatch(ActionCreator.handleOfferCard(payload));
  },
});

export { Card };
export default connect(mapToStateProps, mapDispatchToProps)(Card);
