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
  }

  componentDidMount() {
    const {offers, payload} = this.props;
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30],
    });

    const iconActive = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30],
    });

    const city = offers[0].coordinatos;

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(map);

    offers.forEach((offer) => {
      if (+offer.id === +payload) {
        leaflet.marker(offer.coordinatos, {icon: iconActive}).addTo(map);
      } else {
        leaflet.marker(offer.coordinatos, {icon}).addTo(map);
      }
    });
  }

  render() {
    return <div id="map" style={{height: MapSizes.mainPage}} />;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  mapSize: PropTypes.string,
  payload: PropTypes.string
};

const mapToStateProps = (state) => ({
  payload: state.offers.payload,
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCity(evt) {
    const city = evt.target.closest(`.locations__item-link`).dataset.city;
    dispatch(ActionCreator.handleCity(city));
  },
});

export {Map};
export default connect(mapToStateProps, mapDispatchToProps)(Map);
