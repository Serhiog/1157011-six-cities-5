import PropTypes from "prop-types";

export const PropTypes4Offer = {
  city: PropTypes.object,
  // preview_image: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  // is_favorite: PropTypes.bool,
  // is_premium: PropTypes.bool,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  // max_adults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
