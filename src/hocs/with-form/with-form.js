import React, {PureComponent} from "react";

const withForm = (Component) => {
  return class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
      this._resetState = this._resetState.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleTextFieldChange(evt) {
      this.setState({
        review: evt.target.value,
      });
    }

    _resetState() {
      this.setState({
        rating: ``,
        review: ``
      });
    }

    render() {
      const {rating, review} = this.state;
      return <Component
        {...this.props}
        rating={rating}
        review={review}
        resetState={this._resetState}
        onRatingChange={this._handleRatingChange}
        onTextFieldChange={this._handleTextFieldChange}
      />;
    }
  };
};

export default withForm;
