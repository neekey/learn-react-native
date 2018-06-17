import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItem({ placeName, onItemPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onItemPress}>
      <View style={styles.listItem}>
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  placeName: PropTypes.string,
  onItemPress: PropTypes.func,
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ddd',
    width: '100%',
    marginBottom: 5,
    padding: 10,
  }
});
