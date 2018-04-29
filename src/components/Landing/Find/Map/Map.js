import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={16} defaultCenter={props.center}>
      <Marker position={{ lat: 32.777638, lng: -96.79551 }} />
    </GoogleMap>
  ))
);

export default Map;
