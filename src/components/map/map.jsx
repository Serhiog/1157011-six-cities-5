import React from "react";
import leaflet from "leaflet";
import ".../../leaflet/dist/leaflet.css";
import { PropTypes4Offer } from "../../propConsts";
import PropTypes from "prop-types";
import { MapSizes } from "../../consts";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import { getOffers, getSelectedCity } from "../../store/offers/selectors";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.layer = null;
    this.getCityOffers = this.getCityOffers.bind(this);
    this.markers = [];
  }

  componentDidMount() {
    const { selectedCity } = this.props;
    const offers = this.getCityOffers();
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30],
    });

    const center = [
      selectedCity.location.latitude,
      selectedCity.location.longitude,
    ];
    const zoom = selectedCity.location.zoom;

    this.map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(center, zoom);

    this.layer = leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        }
      )
      .addTo(this.map);

    offers.forEach((offer) => {
      const marker = leaflet
        .marker([offer.location.latitude, offer.location.longitude], {
          icon,
        })
        .addTo(this.map);
      // marker.addTo(this.map);
      this.markers.push(marker);
    });
  }

  getCityOffers() {
    return this.props.offers.filter(
      (offer) => offer.city.name === this.props.selectedCity.name
    );
  }

  componentDidUpdate() {
    const offers = this.getCityOffers();
    const { selectedCity, hoveredOfferId } = this.props;
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30],
    });

    const iconActive = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30],
    });

    this.markers.forEach((marker) => marker.remove());
    this.markers = [];

    const center = [
      selectedCity.location.latitude,
      selectedCity.location.longitude,
    ];
    const zoom = selectedCity.location.zoom;

    this.map.setView(center, zoom);
    console.log('map offers: ', offers);
    offers.forEach((offer) => {
      let marker;
      if (+offer.id === +hoveredOfferId) {
        marker = leaflet
          .marker(
            [offer.location.latitude, offer.location.longitude],
            { icon: iconActive }
          )
          .addTo(this.map);
      } else {
        marker = leaflet
          .marker(
            [offer.location.latitude, offer.location.longitude],
            { icon }
          )
          .addTo(this.map);
      }
     // marker.addTo(this.map);
      this.markers.push(marker);
    });
  }

  render() {
    return <div id="map" style={{ height: MapSizes.mainPage }} />;
  }
}

const mapToStateProps = (state) => ({
  offers: getOffers(state),
  hoveredOfferId: state.offers.hoveredOfferId,
  selectedCity: getSelectedCity(state),
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

export { Map };
export default connect(mapToStateProps, mapDispatchToProps)(Map);
