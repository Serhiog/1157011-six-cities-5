import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PropTypes4Offer } from "../../consts";
import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { offers } = this.props;
    // const handleOfferCard = (card) => {
    //   console.log(card);
    // }

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) =>
          <OfferCard
            key={i}
            offer={offer}
          />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer))
}
export default OffersList;
