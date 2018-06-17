import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem';
import { FlatList, StyleSheet } from 'react-native';

export default function PlaceList({ places, onSelectItem }) {
  return (
    <FlatList
      data={places}
      renderItem={data => (
        <ListItem
          placeImage={data.item.image}
          onItemPress={() => onSelectItem(data.item.key)}
          placeName={data.item.name} />
      )}
      style={styles.placeList} />
  );
};

PlaceList.propTypes = {
  places: PropTypes.array,
  onSelectItem: PropTypes.func,
};

PlaceList.defaultProps = {
  onSelectItem: () => null,
};

const styles = StyleSheet.create({
  placeList: {
    width: '100%',
  }
});
