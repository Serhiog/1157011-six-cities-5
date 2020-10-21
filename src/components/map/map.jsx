import React from "react";
import leaflet from "leaflet";
import ".../../leaflet/dist/leaflet.css";
import {PropTypes4Offer} from "../../propConsts";
import PropTypes from "prop-types";


class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30],
    });

    const city = offers[0].coordinatos;

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: this.city,
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

    offers.filter((filter) => {
      leaflet.marker(filter.coordinatos, {icon}).addTo(map);
    });
  }

  render() {
    const {mapSize} = this.props;
    return <div id="map" style={{height: mapSize}} />;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  mapSize: PropTypes.string
};


export default Map;
