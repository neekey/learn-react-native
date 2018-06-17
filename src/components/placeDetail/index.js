import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    <Modal animationType="slide" visible={visible} onRequestClose={onCloseModal}>
      {view}
      <View style={styles.placeActions}>
        <Button onPress={onCloseModal} title="Close" />
        <TouchableOpacity onPress={onDeletePlace}>
          <Icon name="ios-trash" size={30} style={{ textAlign: 'center', color: 'red' }} />
        </TouchableOpacity>
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
