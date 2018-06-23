import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SCREEN_ID = 'SCREEN_SIDE_MENU';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: 'white',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
  },
  actionIcon: {
    marginRight: 10,
  },
});

export default function SideMenuScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.actionItem}>
          <Icon style={styles.actionIcon} name="ios-log-out" size={22} />
          <Text>Sign out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
