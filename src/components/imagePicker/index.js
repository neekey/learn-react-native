import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import Button from '../button';
import imagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  placeholder: {
    backgroundColor: '#ddd',
    height: 200,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default class ImagePicker extends React.Component {
  state = {
    selectedImage: null,
  };

  onPickImage = () => {
    imagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        const newImage = { uri: response.uri };
        this.setState({
          selectedImage: newImage
        });
        this.props.onImagePick(newImage);
      }
    });
  };

  render() {
    const { selectedImage } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          {selectedImage ? (
            <Image
              source={selectedImage}
              style={styles.image} />
          ) : null}
        </View>
        <Button onPress={this.onPickImage} title="Pick an image" />
      </View>
    )
  }
}

ImagePicker.propTypes = {
  onImagePick: PropTypes.func,
};

ImagePicker.defaultProps = {
  onImagePick: () => null,
};
