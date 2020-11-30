import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getUnicCityNames} from "../../store/offers/selectors";
import {changeCity} from "../../store/action";

let CitiesList = ({unicCities, currentCity, handleCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {unicCities.map((unicCity, i) => {
            return (
              <li key={i} className="locations__item">
                <a
                  onClick={handleCity}
                  className={`locations__item-link tabs__item ${
                    currentCity === unicCity ? `tabs__item--active` : ``
                  }`}
                  href="#"
                  data-city={unicCity}
                >
                  <span>{unicCity}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  unicCities: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCity: PropTypes.func,
  currentCity: PropTypes.string.isRequired,
};

const mapToStateProps = (state) => ({
  unicCities: getUnicCityNames(state),
  currentCity: state.offers.selectedCity,
});

const mapDispatchToProps = (dispatch) => ({
  handleCity(evt) {
    evt.target.parentNode.classList.toggle(`tabs__item--active`);
    const city = evt.target.closest(`.locations__item-link`).dataset.city;
    dispatch(ActionCreator.handleCity(city));
    dispatch(changeCity(city));
  },
});

export {CitiesList};
export default connect(mapToStateProps, mapDispatchToProps)(CitiesList);
