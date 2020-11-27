import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const SelectSort = ({handleSorting}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <select onChange={handleSorting} className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular" defaultValue="">
          Popular
        </option>
        <option className="places__option" value="to-high">
          Price: low to high
        </option>
        <option className="places__option" value="to-low">
          Price: high to low
        </option>
        <option className="places__option" value="top-rated">
          Top rated first
        </option>
      </select>
    </form>
  );
};

SelectSort.propTypes = {
  handleSorting: PropTypes.func,
};

const mapToStateProps = (state) => ({
  unicCities: state.offers.unicCities,
});

const mapDispatchToProps = (dispatch) => ({
  handleSorting(evt) {
    dispatch(ActionCreator.handleSorting(evt.target.value));
  },
});

export {SelectSort};
export default connect(mapToStateProps, mapDispatchToProps)(SelectSort);
