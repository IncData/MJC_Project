import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '30%',
    height: '40%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 48.5850113,
                    lng: 7.7542712
                }}
            >
                <Marker
                    name={'MJC, Strasbourg'}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAbM8bzxePNL9rwg6YJZ2bdeGzIBXSK4kA&callback'
})(MapContainer);