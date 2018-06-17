import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem';
import { View, StyleSheet } from 'react-native';

export default function PlaceList({ places }) {
  return (
    <View style={styles.placeList}>
      {places.map((place, index) => (
        <ListItem key={index} placeName={place} />
      ))}
    </View>
  );
};

PlaceList.propTypes = {
  places: PropTypes.array,
};

const styles = StyleSheet.create({
  placeList: {
    width: '100%',
  }
});
