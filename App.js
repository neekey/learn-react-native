import React from 'react';
import { StyleSheet, View } from 'react-native';
import NewPlace from './src/components/newPlace';
import PlaceList from './src/components/placeList';
import PlaceDetail from './src/components/placeDetail';
import placeImage from './src/assets/example_img.jpg';

const images = [
  placeImage,
  { uri: 'https://www.billboard.com/files/media/Christina-Aguilera-press-photo-02-billboard-1548.jpg' },
];

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlaceKey: null,
  };

  getSelectedPlaceKey = () => {
    const { selectedPlaceKey, places } = this.state;
    if (selectedPlaceKey) {
      return places.find(item => item.key === selectedPlaceKey);
    }
    return null;
  };

  handlePlaceAdd = (newPlace) => {
    this.setState({
        places: [...this.state.places, {
          key: String(Math.random()),
          name: newPlace,
          image: images[Math.random() >= 0.5 ? 0 : 1],
        }],
    });
  };

  handlePlaceDelete = () => {
    const { selectedPlaceKey, places } = this.state;
    if (selectedPlaceKey) {
      this.setState({
        places: places.filter(
          item => item.key !== selectedPlaceKey
        ),
      });
    }
  };

  handlePlaceDetailModalClose = () => {
    this.setState({
      selectedPlaceKey: null,
    });
  };

  handlePlaceSelect = key => {
    this.setState({
      selectedPlaceKey: key,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <NewPlace
          onAddPlace={this.handlePlaceAdd} />
        <PlaceDetail
          onDeletePlace={this.handlePlaceDelete}
          onCloseModal={this.handlePlaceDetailModalClose}
          place={this.getSelectedPlaceKey()} />
        <PlaceList
          onSelectItem={this.handlePlaceSelect}
          places={this.state.places} />
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
