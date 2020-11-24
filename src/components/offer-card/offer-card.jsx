import React from "react";
import {PropTypes4Offer} from "../../propConsts";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FavoriteButton from "../favorite-btn/favorite-btn";

const Card = ({offer, offerId, handleOfferCard, nearby}) => {
  return (
    <article
      data-id={offerId}
      className={`${
        nearby ? `near-places__card` : `cities__place-card`
      } place-card `}
      onMouseOver={(evt) =>
        handleOfferCard(
            evt.target.closest(
                `.${nearby ? `near-places__card` : `cities__place-card`}`
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
          nearby ? `near-places__image-wrapper` : `cities__image-wrapper`
        } place-card__image-wrapper`}
      >
        <Link to={`/offer/${offerId}`}>
          <img
            className="place-card__image"
            src={offer.preview_image}
            width={260}
            height={200}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton offer={offer} classCard={`place-card`} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating * 10}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.description}</a>
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
};

export default Card;
