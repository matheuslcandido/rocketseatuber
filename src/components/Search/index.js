import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
    render() {
        return <GooglePlacesAutocomplete
            placeholder="Para onde?"
            onPress={() => {}}
            query={{
                key: 'AIzaSyCKHn6Uj9qH_WZ2kGQjafpJ_NrW9wROXSc',
                language: 'pt'
            }}
            textImputProps={{
                autoCapitalize: "none",
                autoCorrect: false
            }}
            fetchDetails
            enablePoweredByContainer={false}
        />;
    }
}