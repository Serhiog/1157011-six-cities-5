import PropTypes from "prop-types";

export const PropTypes4Offer = {
  city: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
export const PropTypes4ServerOffer = {
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    name: PropTypes.string,
  }),
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatar_url: PropTypes.string,
    id: PropTypes.number,
    is_pro: PropTypes.bool,
    name: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  is_favorite: PropTypes.bool.isRequired,
  is_premium: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  max_adults: PropTypes.number.isRequired,
  preview_image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export const PropsTypes4Reviews = {
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};
