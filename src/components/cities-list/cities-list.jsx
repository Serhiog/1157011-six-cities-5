import React from "react";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = ({unicCities, handleCity}) => {
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
  unicCities: state.unicCities,
});

const mapDispatchToProps = (dispatch) => ({
  handleCity(evt) {
    dispatch(ActionCreator.handleCity(evt));
  },
});

export {CitiesList};
export default connect(mapToStateProps, mapDispatchToProps)(CitiesList);
