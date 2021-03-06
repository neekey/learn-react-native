import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/places';
import Icon from 'react-native-vector-icons/Ionicons';
import Map from 'react-native-maps';

export const SCREEN_ID = 'SCREEN_PLACE_DETAIL';

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
  },
  map: {
    width: '100%',
    height: 250,
  },
});

function PlaceDetailScreen({ place, onDeletePlace }) {
  if (place) {
    return (
      <ScrollView>
        <View style={styles.placeDetail}>
          <Image style={styles.placeImage} source={place.image} />
          <Text style={styles.placeName}>{place.name}</Text>
          <Map
            style={styles.map}
            initialRegion={{
              ...place.location,
              latitudeDelta: 0.0122,
              longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
            }}>
            <Map.Marker coordinate={place.location} />
          </Map>
        </View>
        <View style={styles.placeActions}>
          <TouchableOpacity onPress={onDeletePlace}>
            <Icon name="ios-trash" size={30} style={{ textAlign: 'center', color: 'red' }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  return null;
}

PlaceDetailScreen.propTypes = {
  place: PropTypes.object,
  onDeletePlace: PropTypes.func,
};

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
