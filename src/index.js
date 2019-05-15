import React from 'react';
import MapView from 'react-native-maps';

import { View } from 'react-native';

const App = () => (
    <View style={{ flex: 1 }}>
        <MapView 
            style={{ flex: 1 }}
            region={{ 
                latitude: -20.8090614,
                longitude: -49.5093683,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
            }}
            showsUserLocation
            loadingEnabled
        />
    </View>
);

export default App;