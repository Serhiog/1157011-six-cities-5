import React from "react";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer} = this.props;

    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{offer.city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">

          <article className="favorites__card place-card">
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src={offer.photos} width={150} height={110} alt="Place image" />
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">€{offer.price}</b>
                  <span className="place-card__price-text">/&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width={18} height={19}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
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

        </div>
      </li>
    );
  }
}

FavoriteItem.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
};
export default FavoriteItem;