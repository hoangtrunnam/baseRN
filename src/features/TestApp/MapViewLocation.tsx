/* eslint-disable react-native/no-inline-styles */
import {View, SafeAreaView, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'

const MapViewLocation = () => {
  const [region, _setRegion] = useState({
    latitude: 21.003353389893693,
    longitude: 105.84332046867897,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={region}
          onRegionChange={regionChange => {
            console.log('🚀 ~ file: MapViewLocation.tsx:20 ~ region:', regionChange)
          }}>
          <Marker
            coordinate={region}
            pinColor="blue"
            title="my current location"
            description="locationnn des"
          />
        </MapView>
      </View>
    </SafeAreaView>
  )
}

export default MapViewLocation

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
})
