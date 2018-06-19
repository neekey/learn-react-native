import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SCREEN_ID = 'SCREEN_SIDE_MENU';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default function SideMenuScreen() {
  return (
    <View style={styles.container}>
      <Text>Side Menu</Text>
    </View>
  );
}
