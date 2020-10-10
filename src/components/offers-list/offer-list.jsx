import React from "react";
import PropTypes from "prop-types";
import { PropTypes4Offer } from "../../propConsts";
import OfferCard from "../offer-card/offer-card";

class OfferList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeCardId: null };
    this.offers = props.offers;
    this.handleOfferCard = this.handleOfferCard.bind(this);
  }

  handleOfferCard(activeCardId) {
    this.setState({ activeCardId });
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.offers.map((offer) =>
          < OfferCard
            key={offer.id}
            offer={offer}
            handleOfferCard={this.handleOfferCard}
            offerId={offer.id}
          />)}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer))
}
export default OfferList;
