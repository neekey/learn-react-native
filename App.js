import React from 'react';
import { StyleSheet, View } from 'react-native';
import NewPlace from './src/components/newPlace';
import PlaceList from './src/components/placeList';

export default class App extends React.Component {
  state = {
    places: [],
  };

  handlePlaceAdd = (newPlace) => {
    this.setState({
        places: [...this.state.places, newPlace],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <NewPlace
          onAddPlace={this.handlePlaceAdd} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
