import PropTypes from "prop-types";

export const PropTypes4Offer = {
  aboutOwner: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPremium: PropTypes.bool,
  maxCopacity: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,

}
