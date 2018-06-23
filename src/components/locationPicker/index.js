import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import Button from '../button';
import Map from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  placeholder: {
    width: '100%',
  },
  map: {
    width: '100%',
    height: 250,
  },
});

export default class LocationPicker extends React.Component {
  state = {
    focusedLocation: {
      latitude: 37.790035,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
    },
    chosenLocation: null,
  };

  onMapPress = ({ nativeEvent }) => {
    this.map.animateToCoordinate({
      ...nativeEvent.coordinate,
    });
    this.setState({
      focusedLocation: {
        ...this.state.focusedLocation,
        ...nativeEvent.coordinate,
      },
      chosenLocation: { ...nativeEvent.coordinate },
    });
    this.props.onLocationPick(nativeEvent.coordinate);
  };

  onLocateMe = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.map.animateToCoordinate({
          ...coords,
        });
      },
        error => alert(error),
      )
  };

  renderMarker() {
    const chosenLocation = this.state.chosenLocation;
    if (chosenLocation) {
      return <Map.Marker coordinate={chosenLocation} />;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Map
            ref={map => (this.map = map)}
            onPress={this.onMapPress}
            initialRegion={this.state.focusedLocation}
            style={styles.map}>{this.renderMarker()}</Map>
        </View>
        <Button title="Locate me" onPress={this.onLocateMe} />
      </View>
    )
  }
}

LocationPicker.propTypes = {
  onLocationPick: PropTypes.func,
};

LocationPicker.defaultProps = {
  onLocationPick: () => null,
};
