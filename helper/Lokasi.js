import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Geolocation from '@react-native-community/geolocation'

const [loc, setLoc] = useState({
    mapRegion: null,
    lastLat: null,
    lastLong: null,
});

useEffect(() => {
    Geolocation.watchPosition((position) => {
        // Create the object to update this.state.mapRegion through the onRegionChange function
        let region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.00922 * 1.5,
            longitudeDelta: 0.00421 * 1.5
        }
        onRegionChange(region, region.latitude, region.longitude);
    }, (error) => console.log(error));

}, [loc]);

const onRegionChange = (region, lastLat, lastLong) => {
    setLoc({
        mapRegion: region,
        lastLat: lastLat || loc.lastLat,
        lastLong: lastLong || loc.lastLong
    })
}

export default function Lokasi() {
    return (loc);
}
