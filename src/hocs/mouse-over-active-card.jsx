import React from "react";

const withMouseOverActiveCard = (Component) => {
  return class Hoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {activeCardId: null};
      this.handleOfferCard = this.handleOfferCard.bind(this);
    }

    handleOfferCard(activeCardId) {
      this.setState({activeCardId});
    }

    render() {
      return (
        <Component {...this.props} handleOfferCard={this.handleOfferCard} checkedOfferId={this.state.activeCardId}/>
      );
    }
  };
};
export default withMouseOverActiveCard;
