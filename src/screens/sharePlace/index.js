import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import NewPlace from '../../components/newPlace';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/places';

export const SCREEN_ID = 'SCREEN_SHARE_PLACE';

class SharePlaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress' && event.id === 'drawerMenuButton') {
      this.props.navigator.toggleDrawer({
        side: 'left',
      });
    }
  };

  render() {
    const { onAddPlace } = this.props;
    return (
      <View>
        <NewPlace onAddPlace={onAddPlace} />
      </View>
    );
  }
}

SharePlaceScreen.propTypes = {
  onAddPlace: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onAddPlace(placeName) {
      dispatch(addPlace(placeName));
    }
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);


