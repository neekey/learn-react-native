import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ListItem({ placeName, placeImage, onItemPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onItemPress}>
      <View style={styles.listItem}>
        <Image resizeMode="cover" style={styles.placeImage} source={placeImage} />
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  placeName: PropTypes.string,
  onItemPress: PropTypes.func,
  placeImage: PropTypes.any,
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ddd',
    width: '100%',
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage:  {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});
