import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Modal, Button, StyleSheet } from 'react-native';

export default function PlaceDetail({ place, onCloseModal, onDeletePlace }) {
  const visible = !!place;
  let view = null;
  if (place) {
    view = (
      <View style={styles.placeDetail}>
        <Image style={styles.placeImage} source={place.image} />
        <Text style={styles.placeName}>{place.name}</Text>
      </View>
    )
  }
  return (
    <Modal visible={visible} onRequestClose={onCloseModal}>
      {view}
      <View style={styles.placeActions}>
        <Button onPress={onCloseModal} title="Close" />
        <Button onPress={onDeletePlace} title="Delete" color="red" />
      </View>
    </Modal>
  );
}

PlaceDetail.propTypes = {
  place: PropTypes.object,
  onDeletePlace: PropTypes.func,
  onCloseModal: PropTypes.func,
};

const styles = StyleSheet.create({
  placeDetail: {},
  placeImage: {
    width: '100%',
    height: 300,
  },
  placeName: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  placeActions: {
  }
});
