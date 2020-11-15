import React from "react";
import leaflet from "leaflet";
import ".../../leaflet/dist/leaflet.css";
import {PropTypes4Offer} from "../../propConsts";
import PropTypes from "prop-types";
import {MapSizes} from "../../consts";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getOffers} from "../../store/selectors";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    const {offers} = this.props;
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30],
    });

    const city = offers[0].coordinatos;

    const zoom = 12;

    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(city, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(this.map);

    offers.forEach((offer) => {
      leaflet.marker(offer.coordinatos, {icon}).addTo(this.map);
    });
  }

  componentDidUpdate() {
    const {offers, hoveredOfferId} = this.props;
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30],
    });

    const iconActive = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30],
    });

    offers.forEach((offer) => {
      if (+offer.id === +hoveredOfferId) {
        leaflet.marker(offer.coordinatos, {icon: iconActive}).addTo(this.map);
      } else {
        leaflet.marker(offer.coordinatos, {icon}).addTo(this.map);
      }
    });
  }

  render() {
    return <div id="map" style={{height: MapSizes.mainPage}} />;
  }
}

const mapToStateProps = (state) => ({
  offers: getOffers(state),
  hoveredOfferId: state.offers.hoveredOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  handleCity(evt) {
    const city = evt.target.closest(`.locations__item-link`).dataset.city;
    dispatch(ActionCreator.handleCity(city));
  },
});

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  mapSize: PropTypes.string,
  hoveredOfferId: PropTypes.string,
};

export {Map};
export default connect(mapToStateProps, mapDispatchToProps)(Map);
