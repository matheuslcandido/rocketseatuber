import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyCKHn6Uj9qH_WZ2kGQjafpJ_NrW9wROXSc" 
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;