import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

import IState from '../../store/state';
import '../../css/country-page-map.scss';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibWljaGFlbHNoIiwiYSI6ImNraXFkdnZ0ajF0bm4ycmxiM3k0MXRvcjMifQ.Yf1Olmco7KyZFm-rRvcPaw';

const createMap = (markerPoint: any) => {
  mapboxgl.accessToken = MAPBOX_TOKEN;

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 2,
    minZoom: 1,
    center: markerPoint,
  });

  const nav = new mapboxgl.NavigationControl({ visualizePitch: true });
  const scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'metric',
  });

  map.addControl(new mapboxgl.FullscreenControl());
  map.addControl(nav, 'top-left');
  map.addControl(scale);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const marker = new mapboxgl.Marker()
    .setLngLat(markerPoint)
    .addTo(map);
}

const CountryPageMap: React.FC = (props: any) => {
  const { country } = props;
  const coordinates = country.capitalCoordinates;
  const markerPoint = [coordinates.lon, coordinates.lat];

  useEffect(() => {
    createMap(markerPoint);
  });

  return  (
      <div className="country_page_map" id="map" />
    );
}

const mapStateToProps = (state: IState) => ({
  country: state.selectedCountry,
});
export default connect(mapStateToProps)(CountryPageMap);
