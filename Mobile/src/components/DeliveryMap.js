import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function DeliveryMap({ deliveryLocation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: deliveryLocation?.lat || 0,
          longitude: deliveryLocation?.lng || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {deliveryLocation && (
          <Marker
            coordinate={{
              latitude: deliveryLocation.lat,
              longitude: deliveryLocation.lng,
            }}
            title="Delivery Location"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    width: Dimensions.get('window').width - 40,
    height: '100%',
  },
});

