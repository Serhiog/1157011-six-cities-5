import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getUnicOfferNames} from "../../store/selectors";

let CitiesList = ({unicCities, handleCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {unicCities.map((unicCity, i) => {
            return (
              <li key={i} className="locations__item">
                <a
                  onClick={handleCity}
                  className="locations__item-link tabs__item"
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
  unicCities: PropTypes.array,
  handleCity: PropTypes.func,
};

const mapToStateProps = (state) => ({
  unicCities: getUnicOfferNames(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCity(evt) {
    const city = evt.target.closest(`.locations__item-link`).dataset.city;
    dispatch(ActionCreator.handleCity(city));
  },
});

export {CitiesList};
export default connect(mapToStateProps, mapDispatchToProps)(CitiesList);
