import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Input from '../../components/input';
import HeadingText from '../../components/headingText';
import Button from '../../components/button';
import { startMainScreen } from '../main';
import backgroundImage from '../../assets/background.jpg';

export const SCREEN_ID = 'SCREEN_AUTH';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  inputItem: {
    width: '100%',
  }
});

export default function AuthScreen() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <HeadingText>Please login in</HeadingText>
        <Button title="Switch to login" />
        <View style={styles.inputContainer}>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
        </View>
        <Button title="Login" onPress={startMainScreen} />
      </View>
    </ImageBackground>
  );
}
