import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import PlaceList from '../../components/placeList';
import { connect } from 'react-redux';
import { SCREEN_IDS } from '../index';

export const SCREEN_ID = 'SCREEN_FIND_PLACE';

class FindPlaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    console.log(event);
    if (event.type === 'NavBarButtonPress' && event.id === 'drawerMenuButton') {
      this.props.navigator.toggleDrawer({
        side: 'left',
      });
    }
  };

  render() {
    const { places, onSelectItem } = this.props;
    return (
      <View>
        <PlaceList places={places} onSelectItem={onSelectItem} />
      </View>
    );
  }
}

FindPlaceScreen.propTypes = {
  places: PropTypes.array,
  onSelectItem: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    places: state.places.places,
  };
}

function mapDispatchToProps(dispatch, { navigator }) {
  return {
    onSelectItem(placeKey) {
      navigator.push({
        screen: SCREEN_IDS.placeDetail,
        title: 'Place Detail',
        animationType: 'slide-horizontal',
        passProps: {
          placeKey,
        }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);
