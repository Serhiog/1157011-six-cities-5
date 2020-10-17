import moment from "moment";

export const convertRatingToStars = (ratePercentage) => {
  const rate = ratePercentage.split(`%`).join(``);
  if (rate >= 0 && rate <= 30) {
    return 2;
  } else if (rate >= 31 && rate <= 55) {
    return 3;
  } else if (rate >= 56 && rate <= 87) {
    return 4;
  } else if (rate >= 88 && rate <= 100) {
    return 5;
  }
  return true;
};

export const convertReviewDate = (date) => {
  return moment(date).format(`MMMM YYYY`);
};
