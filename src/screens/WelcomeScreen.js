import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>

        {/* Sign Up Button */}
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already Registered? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signInLink}>Sign In</Text>
          </TouchableOpacity>
        </View>

        {/* Social Login Section */}
        <View style={styles.socialSection}>
          <Text style={styles.socialText}>
            Continue with one of the following options
          </Text>

          {/* Google Button */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/google-icon.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          {/* Facebook Button */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/facebook-icon.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Terms and Conditions */}
        <Text style={styles.termsText}>
          By continuing, you automatically accept our{' '}
          <Text style={styles.termsLink}>Terms & Conditions</Text>,{'\n'}
          <Text style={styles.termsLink}>Privacy Policy</Text> and{' '}
          <Text style={styles.termsLink}>Cookies policy</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
  },
  signUpButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#553A5A',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signInContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  signInLink: {
    color: '#40B3A2',
    fontSize: 16,
  },
  socialSection: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  socialText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  socialButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  socialButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  termsText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.8,
    lineHeight: 20,
  },
  termsLink: {
    textDecorationLine: 'underline',
  },
});