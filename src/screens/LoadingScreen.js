import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoadingScreen() {
  // Create animated values for each dot
  const dot1 = new Animated.Value(0);
  const dot2 = new Animated.Value(0);
  const dot3 = new Animated.Value(0);
  const dot4 = new Animated.Value(0);

  const navigation = useNavigation(); // Hook for navigation

  useEffect(() => {
    // Create animation sequence
    const animate = () => {

      // Reset all dots to 0 at the start of each animation cycle
      dot1.setValue(0);
      dot2.setValue(0);
      dot3.setValue(0);
      dot4.setValue(0);

      // Create animation sequence for each dot, with different durations and easing functions
      Animated.sequence([
        Animated.timing(dot1, {
          toValue: 1,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(dot2, {
          toValue: 1,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(dot3, {
          toValue: 1,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(dot4, {
          toValue: 1,
          duration: 400,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        
        Animated.delay(1000), // Delay for 1 second after animation completion

      ]).start(() => {
        // Navigate to the next screen after the animation completes
        navigation.replace('SplashScreen'); // Replace the current screen with the next one
      });
    };

    animate();
  }, [navigation]);

  // Animation interpolation for each dot
  const opacityDot1 = dot1.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 1, 0.3],
  });

  const opacityDot2 = dot2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 1, 0.3],
  });

  const opacityDot3 = dot3.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 1, 0.3],
  });

  const opacityDot4 = dot4.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 1, 0.3],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.dotsContainer}>
        {/* Top dot */}
        <Animated.View
          style={[
            styles.dot,
            styles.topDot,
            { opacity: opacityDot1, backgroundColor: '#B46A51' },
          ]}
        />
        {/* Right dot */}
        <Animated.View
          style={[
            styles.dot,
            styles.rightDot,
            { opacity: opacityDot2, backgroundColor: '#40B3A2' },
          ]}
        />
        {/* Bottom dot */}
        <Animated.View
          style={[
            styles.dot,
            styles.bottomDot,
            { opacity: opacityDot3, backgroundColor: '#A5B1AA' },
          ]}
        />
        {/* Left dot */}
        <Animated.View
          style={[
            styles.dot,
            styles.leftDot,
            { opacity: opacityDot4, backgroundColor: '#553A5A' },
          ]}
        />
      </View>
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
  dotsContainer: {
    width: 50,
    height: 50,
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  topDot: {
    top: 0,
    left: '50%',
    marginLeft: -5,
  },
  rightDot: {
    right: 0,
    top: '50%',
    marginTop: -5,
  },
  bottomDot: {
    bottom: 0,
    left: '50%',
    marginLeft: -5,
  },
  leftDot: {
    left: 0,
    top: '50%',
    marginTop: -5,
  },
});