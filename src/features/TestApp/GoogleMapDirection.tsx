/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native'
import React, {useRef, useState} from 'react'
import MapViewDirections from 'react-native-maps-directions'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'

const initialRegion = {
  latitude: 21.003353389893693,
  longitude: 105.84332046867897,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}
// const GOOGLE_MAPS_APIKEY = ''
// const GOOGLE_MAPS_APIKEY1 = ''
// const GOOGLE_MAPS_APIKEY2 = ''
const GOOGLE_MAPS_APIKEY3 = ''
// const GOOGLE_MAPS_APIKEY4 = ''

const GoogleMapDirection = () => {
  // huce
  const [region, _setRegion] = useState({
    latitude: 21.003353389893693,
    longitude: 105.84332046867897,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })
  // TMU
  const [destination, _setDestination] = useState({
    latitude: 21.037698409596942,
    longitude: 105.77437701125434,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })

  const mapRef = useRef<any>()

  return (
    <View style={styles.container}>
      <MapView
        style={{flex: 1, width: '100%', height: '100%', ...StyleSheet.absoluteFillObject}}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}>
        <Marker
          coordinate={region}
          pinColor="blue"
          title="HUCE"
          description="DH xay dung HN"
          anchor={{x: 0.4, y: 0.5}}
        />
        <Marker
          coordinate={destination}
          pinColor="red"
          title="TMU"
          description="DH Thuong mai HN"
          anchor={{x: 0.4, y: 0.5}}
        />
        <MapViewDirections
          origin={region}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY3}
          strokeColor="red"
          optimizeWaypoints
          onReady={res => {
            mapRef.current?.fitToCoordinates(res.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            })
          }}
        />
      </MapView>
    </View>
  )
}

export default GoogleMapDirection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
})
