import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SignInScreen() {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    emailOrPhone: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={32} color="white" />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Enter your login details to continue</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          placeholderTextColor="#ffffff80"
          value={credentials.emailOrPhone}
          onChangeText={(text) => setCredentials({ ...credentials, emailOrPhone: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ffffff80"
          secureTextEntry
          value={credentials.password}
          onChangeText={(text) => setCredentials({ ...credentials, password: text })}
        />

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.noAccountText}>Don't have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>Or</Text>
        </View>

        <Text style={styles.socialText}>Continue with one of the following options</Text>

        {/* Social Buttons */}
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={24} color="black" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color="#1877F2" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>

        {/* Terms Text */}
        <Text style={styles.termsText}>
          By continuing, you automatically accept our{' '}
          <Text style={styles.termsLink}>Terms & Conditions</Text>,{'\n'}
          <Text style={styles.termsLink}>Privacy Policy</Text> and{' '}
          <Text style={styles.termsLink}>Cookies policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backButton: {
    padding: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff80',
    marginBottom: 32,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#8B3DFF',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#40E0D0',
    textAlign: 'right',
    fontSize: 16,
    marginTop: 8,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  noAccountText: {
    color: 'white',
    fontSize: 16,
  },
  signUpText: {
    color: '#40E0D0',
    fontSize: 16,
    fontWeight: '500',
  },
  dividerContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerText: {
    color: 'white',
    fontSize: 16,
  },
  socialText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },
  socialIcon: {
    marginRight: 12,
    marginLeft: 12,
  },
  socialButtonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 48,
  },
  termsText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 20,
  },
  termsLink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

