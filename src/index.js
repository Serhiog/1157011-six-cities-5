import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const offerSettings = {
  OFFERS_NUMBER: 333,
};

ReactDOM.render(
    <App
      countOffers={offerSettings.OFFERS_NUMBER}
    />,
    document.querySelector(`#root`)
);
