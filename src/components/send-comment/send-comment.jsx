import React from "react";

class SendComment extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleLengthMessage = this.handleLengthMessage.bind(this);
    this.state = {
      comment: ``,
      rating: 0
    };
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const data = new FormData(evt.target);
    this.setState({
      comment: data.get(`review`),
      rating: data.get(`rating`)
    });
  }

  handleLengthMessage(evt) {
    evt.preventDefault();
    if (evt.target.value.length >= 50) {
      console.log(`mas >50`);
    }

  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" id="5-stars" type="radio" defaultValue={5} />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" id="4-stars" type="radio" defaultValue={4} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" id="3-stars" type="radio" defaultValue={3} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" id="2-stars" type="radio" defaultValue={2} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" id="1-star" type="radio" defaultValue={1} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={""} onChange={this.handleLengthMessage} />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.</p>
          <button className="reviews__submit form__submit button" type="submit" >Submit</button>
        </div>
      </form>
    );
  }
}

export default SendComment;
