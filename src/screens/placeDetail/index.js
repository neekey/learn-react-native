import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/places';
import Icon from 'react-native-vector-icons/Ionicons';

export const SCREEN_ID = 'SCREEN_PLACE_DETAIL';

function PlaceDetailScreen({ place, onDeletePlace }) {
  if (place) {
    return (
      <View>
        <View style={styles.placeDetail}>
          <Image style={styles.placeImage} source={place.image} />
          <Text style={styles.placeName}>{place.name}</Text>
        </View>
        <View style={styles.placeActions}>
          <TouchableOpacity onPress={onDeletePlace}>
            <Icon name="ios-trash" size={30} style={{ textAlign: 'center', color: 'red' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return null;
}

PlaceDetailScreen.propTypes = {
  place: PropTypes.object,
  onDeletePlace: PropTypes.func,
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

function mapStateToProps(state, { placeKey }) {
  return {
    place: state.places.places.find(item => item.key === placeKey),
  };
}

function mapDispatchToProps(dispatch, { placeKey, navigator }) {
  return {
    onDeletePlace() {
      dispatch(deletePlace(placeKey));
      navigator.pop();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailScreen);
