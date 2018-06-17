import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

export default function ListItem({placeName}) {
  return (
    <View style={styles.listItem}>
      <Text>{placeName}</Text>
    </View>
  );
};

ListItem.propTypes = {
  placeName: PropTypes.string,
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ddd',
    width: '100%',
    marginBottom: 5,
    padding: 10,
  }
});
