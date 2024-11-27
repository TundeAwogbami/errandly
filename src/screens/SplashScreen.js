import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
export default function SplashScreen({navigation}) {
  // const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Signup');
    }, 2000); // Navigate to SignupScreen after 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/errandly-logo.png')}
        style={styles.logo}
        resizeMode="contain"
        />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
        translucent={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: "200px",
    height: "200px",
  },
});