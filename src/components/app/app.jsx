import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";


const App = (props) => {
  const {countOffers} = props;

  return (
    <MainPage countOffers={countOffers} />
  );
};

App.propTypes = {
  countOffers: PropTypes.number.isRequired,
};

export default App;
