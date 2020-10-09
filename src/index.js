import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";


const offerSettings = {
  OFFERS_NUMBER: 333,
};

ReactDOM.render(
  <App
    offers={offers}
    countOffers={offerSettings.OFFERS_NUMBER}
  />,
  document.querySelector(`#root`)
);
