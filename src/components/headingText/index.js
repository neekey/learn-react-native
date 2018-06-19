import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Text from '../text';

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default function HeadingText({ style, ...props }) {
  return (
    <Text
      style={[styles.headingText, style]}
      {...props} />
  );
};

HeadingText.propTypes = {
  style: PropTypes.any,
};
