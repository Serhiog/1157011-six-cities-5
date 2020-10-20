import PropTypes from "prop-types";

export const PropTypes4Offer = {
  city: PropTypes.string.isRequired,
  aboutOwner: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  maxCopacity: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  ownerPhoto: PropTypes.string,
  ownerName: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    rating: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired
  })).isRequired,
};
