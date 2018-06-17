import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem';
import { FlatList, StyleSheet } from 'react-native';

export default function PlaceList({ places, onItemDelete }) {
  return (
    <FlatList
      data={places}
      renderItem={data => (
        <ListItem
          onItemPress={() => onItemDelete(data.item.key)}
          placeName={data.item.name} />
      )}
      style={styles.placeList} />
  );
};

PlaceList.propTypes = {
  places: PropTypes.array,
  onItemDelete: PropTypes.func,
};

PlaceList.defaultProps = {
  onItemDelete: () => null,
};

const styles = StyleSheet.create({
  placeList: {
    width: '100%',
  }
});
