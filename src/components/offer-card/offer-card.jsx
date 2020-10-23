import React from "react";
import {PropTypes4Offer} from "../../propConsts";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Card = ({offer, offerId, handleOfferCard, classNameArticle, classNameImageWrapper}) => {
  const renderCard = () => {
    return (
      <article
        data-id={offerId}
        className={`${classNameArticle} place-card `}
        onMouseOver={(evt) =>
          handleOfferCard(evt.target.closest(`.${classNameArticle}`).dataset.id)
        }
      >
        {offer.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}

        <div className={`${classNameImageWrapper} place-card__image-wrapper`}>
          <Link to="/offer/">
            <img
              className="place-card__image"
              src={offer.photos[0]}
              width={260}
              height={200}
              alt="Place image"
            />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{offer.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: offer.rating}} />
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

  return renderCard();
};

Card.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
  handleOfferCard: PropTypes.func,
  offerId: PropTypes.number,
};

export default Card;
