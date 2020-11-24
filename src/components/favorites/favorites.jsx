import React from "react";
import FavoriteItem from "../favorites-items/favorite-item";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchFavoriteOffersList} from "../../store/api-actions";
import {AuthorizationStatus} from "../../consts";

const Favorites = ({favoriteOffers, isLogged, email}) => {
  // useEffect(() => {
  //   getFavoriteOffers();
  // }, []);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/login"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      { isLogged === AuthorizationStatus.AUTH ? email : `Sign In`}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {favoriteOffers.length === 0 ? (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan yor future
                  trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <FavoriteItem
          offers={favoriteOffers}
        />
      )}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  favoriteOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  getFavoriteOffers: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.offers.favoriteOffers,
  isLogged: state.user.authorizationStatus,
  email: state.user.email
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(fetchFavoriteOffersList());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
