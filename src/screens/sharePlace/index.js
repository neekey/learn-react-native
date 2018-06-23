import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import HeadingText from '../../components/headingText';
import NewPlaceName from '../../components/newPlaceName';
import Button from '../../components/button';
import ImagePicker from '../../components/imagePicker';
import LocationPicker from '../../components/locationPicker';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/places';

export const SCREEN_ID = 'SCREEN_SHARE_PLACE';

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: '#ddd',
    height: 200,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});


class SharePlaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: null,
      location: null,
      image: null,
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress' && event.id === 'drawerMenuButton') {
      this.props.navigator.toggleDrawer({
        side: 'left',
      });
    }
  };

  onPlaceNameChange = (placeName) => {
    this.setState({
      placeName,
    });
  };

  onLocationChange = (location) => {
    this.setState({
      location,
    });
  };

  onImageChange = (image) => {
    this.setState({
      image,
    });
  };

  onAddPlace = () => {
    const { placeName, location, image } = this.state;
    this.props.onAddPlace({
      name: placeName,
      location,
      image,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100} enabled>
        <ScrollView>
          <View style={styles.container}>
            <HeadingText>Share a place with us</HeadingText>
            <ImagePicker onImagePick={this.onImageChange} />
            <LocationPicker onLocationPick={this.onLocationChange} />
            <NewPlaceName
              onChangeText={this.onPlaceNameChange}
              value={this.state.placeName} />
            <Button onPress={this.onAddPlace} title="Share this place" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    );
  }
}

SharePlaceScreen.propTypes = {
  onAddPlace: PropTypes.func,
};

SharePlaceScreen.defaultProps = {
  onAddPlace: () => null,
};

function mapDispatchToProps(dispatch) {
  return {
    onAddPlace(place) {
      dispatch(addPlace(place));
    }
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);


