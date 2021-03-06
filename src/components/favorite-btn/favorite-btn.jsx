import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {changeFavorite} from "../../store/api-actions";
import {
  checkFavorite,
  getWidthIconFavorite,
  getHeightIconFavorite,
} from "../../store/offers/selectors";

const FavoriteButton = ({
  offer,
  classCard,
  changeFavoriteStatusAction,
  auth
}) => {
  const handleFavoriteButtonClick = () => {
    changeFavoriteStatusAction(offer.id, checkFavorite(!offer.is_favorite));
  };

  const widthIcon = getWidthIconFavorite(classCard);
  const heightIcon = getHeightIconFavorite(classCard);

  return (
    <React.Fragment>
      {auth ? (
        <button
          onClick={handleFavoriteButtonClick}
          className={`button ${classCard}__bookmark-button ${
            offer.is_favorite ? `place-card__bookmark-button--active` : ``
          }`}
          type="button"
        >
          <svg
            className={`place-card__bookmark-icon`}
            width={widthIcon}
            height={heightIcon}
          >
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      ) : (
        <Link
          to="/login"
          className={`button ${classCard}__bookmark-button`}
          type="button"
        >
          <svg
            className={`${classCard}__bookmark-icon`}
            width={widthIcon}
            height={heightIcon}
          >
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </Link>
      )}
    </React.Fragment>
  );
};

FavoriteButton.propTypes = {
  offer: PropTypes.object.isRequired,
  classCard: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string,
  changeFavoriteStatusAction: PropTypes.func,
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatusAction(id, bool) {
    dispatch(changeFavorite(id, bool));
  },
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
