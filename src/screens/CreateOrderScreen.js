import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapPin } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

// Taxi locations data
const TAXI_LOCATIONS = [
  { id: 1, coordinate: { latitude: 9.8965, longitude: 8.8583 } },
  { id: 2, coordinate: { latitude: 9.9065, longitude: 8.8683 } },
  { id: 3, coordinate: { latitude: 9.8865, longitude: 8.8483 } },
  { id: 4, coordinate: { latitude: 9.9165, longitude: 8.8783 } },
  { id: 5, coordinate: { latitude: 9.8765, longitude: 8.8383 } },
];

export default function CreateOrderScreen() {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [dropOffLocation, setDropOffLocation] = useState(null);

  const initialRegion = {
    latitude: 9.8965,
    longitude: 8.8583,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleLocationSelect = (coordinate) => {
    if (!selectedLocation) {
      setSelectedLocation(coordinate);
    } else if (!dropOffLocation) {
      setDropOffLocation(coordinate);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* Map View */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        onPress={(e) => handleLocationSelect(e.nativeEvent.coordinate)}
      >
        {/* Taxi Markers */}
        {TAXI_LOCATIONS.map((taxi) => (
          <Marker
            key={taxi.id}
            coordinate={taxi.coordinate}
            style={styles.taxiMarker}
          >
            <View style={styles.taxiIcon}>
              <Text style={styles.taxiEmoji}>🚕</Text>
            </View>
          </Marker>
        ))}

        {/* Selected Location Marker */}
        {selectedLocation && (
          <Marker coordinate={selectedLocation}>
            <View style={styles.locationPin}>
              <MapPin color="#553A5A" size={24} />
            </View>
          </Marker>
        )}

        {/* Drop Off Location Marker */}
        {dropOffLocation && (
          <Marker coordinate={dropOffLocation}>
            <View style={styles.locationPin}>
              <MapPin color="#40B3A2" size={24} />
            </View>
          </Marker>
        )}
      </MapView>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Location Selection Buttons */}
      <View style={styles.locationButtons}>
        <TouchableOpacity 
          style={[styles.locationButton, styles.pickupButton]}
          onPress={() => {/* Handle pickup location selection */}}
        >
          <MapPin color="#FFFFFF" size={20} style={styles.buttonIcon} />
          <Text style={styles.locationButtonText}>Select Your Location</Text>
          <Text style={styles.chevron}>▼</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.locationButton, styles.dropoffButton]}
          onPress={() => {/* Handle dropoff location selection */}}
        >
          <MapPin color="#FFFFFF" size={20} style={styles.buttonIcon} />
          <Text style={styles.locationButtonText}>Select Drop Off Location</Text>
          <Text style={styles.chevron}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* Create Order Button */}
      <TouchableOpacity 
        style={styles.createOrderButton}
        onPress={() => {/* Handle order creation */}}
      >
        <Text style={styles.createOrderText}>Create Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  locationButtons: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
    gap: 12,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 30,
    elevation: 3,
  },
  pickupButton: {
    backgroundColor: '#000000',
  },
  dropoffButton: {
    backgroundColor: '#40B3A2',
  },
  buttonIcon: {
    marginRight: 12,
  },
  locationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },
  chevron: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  createOrderButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#553A5A',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
  },
  createOrderText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  taxiMarker: {
    width: 40,
    height: 40,
  },
  taxiIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  taxiEmoji: {
    fontSize: 20,
  },
  locationPin: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});