import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { Phone, MessageCircle, Wallet, Home, Navigation2 } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const TIMELINE_DATA = [
  {
    id: 1,
    status: 'Courier requested',
    time: 'Nov. 8 2024, 08:00am',
    completed: true
  },
  {
    id: 2,
    status: 'Package ready for delivery',
    time: 'Nov. 8 2024, 08:30am',
    completed: true
  },
  {
    id: 3,
    status: 'Package in transit',
    time: 'Nov. 8 2024, 10:30am',
    completed: false
  },
  {
    id: 4,
    status: 'Package delivered',
    time: 'Nov. 8 2024, 10:30am',
    completed: false
  }
];

export default function TrackOrderScreen() {
  const navigation = useNavigation();

  const initialRegion = {
    latitude: 9.8965,
    longitude: 8.8583,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* Map View */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
      >
        {/* Add markers and route polyline here */}
      </MapView>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Tracking Number */}
      <View style={styles.trackingContainer}>
        <Text style={styles.trackingLabel}>Tracking Number</Text>
        <View style={styles.trackingNumberContainer}>
          <View style={styles.trackingIcon} />
          <Text style={styles.trackingNumber}>R-7458-4567-4434-5854</Text>
        </View>
      </View>

      {/* Estimated Time Badge */}
      <View style={styles.estimatedTimeContainer}>
        <Text style={styles.estimatedTime}>30 Min</Text>
      </View>

      {/* Timeline Container */}
      <View style={styles.timelineContainer}>
        <View style={styles.timeline}>
          {TIMELINE_DATA.map((item, index) => (
            <View key={item.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={[
                  styles.timelineDot,
                  item.completed && styles.timelineDotCompleted
                ]} />
                {index < TIMELINE_DATA.length - 1 && (
                  <View style={[
                    styles.timelineLine,
                    item.completed && styles.timelineLineCompleted
                  ]} />
                )}
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineStatus}>{item.status}</Text>
                <Text style={styles.timelineTime}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Driver Info */}
        <View style={styles.driverContainer}>
          <Image
            source={require('../../assets/driver-avatar.jpg')}
            style={styles.driverAvatar}
          />
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>John Doe</Text>
            <Text style={styles.driverRole}>Dispatch Rider</Text>
          </View>
          <TouchableOpacity style={styles.driverAction}>
            <Phone color="#000" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.driverAction}>
            <MessageCircle color="#000" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Wallet color="#666" size={24} />
          <Text style={styles.bottomNavText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <View style={styles.homeButton}>
            <Home color="#FFF" size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Navigation2 color="#40B3A2" size={24} />
          <Text style={[styles.bottomNavText, styles.activeNavText]}>Track</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  trackingContainer: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
  },
  trackingLabel: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
  trackingNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    elevation: 3,
  },
  trackingIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#40B3A2',
    borderRadius: 12,
    marginRight: 12,
  },
  trackingNumber: {
    fontSize: 16,
    color: '#40B3A2',
    fontWeight: '500',
  },
  estimatedTimeContainer: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    backgroundColor: '#FF0000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  estimatedTime: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timelineContainer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 5,
  },
  timeline: {
    marginBottom: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineLeft: {
    width: 20,
    alignItems: 'center',
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#CCCCCC',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  timelineDotCompleted: {
    backgroundColor: '#40B3A2',
  },
  timelineLine: {
    width: 2,
    height: 40,
    backgroundColor: '#CCCCCC',
    marginTop: 4,
  },
  timelineLineCompleted: {
    backgroundColor: '#40B3A2',
  },
  timelineContent: {
    marginLeft: 12,
    flex: 1,
  },
  timelineStatus: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  timelineTime: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  driverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  driverAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  driverInfo: {
    marginLeft: 12,
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  driverRole: {
    fontSize: 14,
    color: '#666666',
  },
  driverAction: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingBottom: 20,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#40B3A2',
  },
  homeButton: {
    width: 56,
    height: 56,
    backgroundColor: '#553A5A',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
});