import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlace, deletePlace } from './src/store/actions/places';
import { StyleSheet, View } from 'react-native';
import NewPlace from './src/components/newPlace';
import PlaceList from './src/components/placeList';
import PlaceDetail from './src/components/placeDetail';

class App extends React.Component {
  state = {
    selectedPlaceKey: null,
  };

  getSelectedPlaceKey = () => {
    const { selectedPlaceKey } = this.state;
    const places = this.props.places;
    if (selectedPlaceKey) {
      return places.find(item => item.key === selectedPlaceKey);
    }
    return null;
  };

  handlePlaceDelete = () => {
    const { selectedPlaceKey } = this.state;
    if (selectedPlaceKey) {
      this.props.onDeletePlace(selectedPlaceKey)
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
          onAddPlace={this.props.onAddPlace} />
        <PlaceDetail
          onDeletePlace={this.handlePlaceDelete}
          onCloseModal={this.handlePlaceDetailModalClose}
          place={this.getSelectedPlaceKey()} />
        <PlaceList
          onSelectItem={this.handlePlaceSelect}
          places={this.props.places} />
      </View>
    );
  }
}

App.propTypes = {
  places: PropTypes.array,
  onAddPlace: PropTypes.func,
  onDeletePlace: PropTypes.func,
};

App.defaultProps = {
  onDeletePlace: () => null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

function mapStateToProps(state) {
  return {
    places: state.places.places,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddPlace(placeName) {
      dispatch(addPlace(placeName));
    },
    onDeletePlace(placeKey) {
      dispatch(deletePlace(placeKey));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
