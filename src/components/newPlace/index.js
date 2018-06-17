import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button, View, StyleSheet } from 'react-native';

export default class NewPlace extends React.Component {
  state = {
    newPlaceName: '',
  };

  handlePlaceNameChange = placeName => {
    this.setState({
      newPlaceName: placeName,
    });
  };

  handleNewPlaceAdd = () => {
    // this.setState({
    //   newPlaceName: '',
    // });
    this.props.onAddPlace(this.state.newPlaceName);
  };

  render() {
    return (
      <View style={styles.newPlace}>
        <TextInput
          onChangeText={this.handlePlaceNameChange}
          style={styles.placeNameInput}
          clearButtonMode="always"
          autoFocus
          returnKeyLabel="Hit me!"
          placeholder="please input something"
          value={this.state.newPlaceName} />
        <Button onPress={this.handleNewPlaceAdd} style={styles.addPlaceButton} title="Add" />
      </View>
    );
  }
}

NewPlace.propTypes = {
  onAddPlace: PropTypes.func,
};

const styles = StyleSheet.create({
  newPlace: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeNameInput: {
    width: '70%',
  },
  addPlaceButton: {
    width: '30%',
  }
});
