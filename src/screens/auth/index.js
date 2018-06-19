import React from 'react';
import { View, Text, Button } from 'react-native';
import { startMainScreen } from '../main';

export const SCREEN_ID = 'SCREEN_AUTH';

export default function AuthScreen() {
  return (
    <View>
      <Text>Auth Screen</Text>
      <Button title="Login" onPress={startMainScreen} />
    </View>
  );
}
