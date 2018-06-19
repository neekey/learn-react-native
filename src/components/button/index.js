import React from 'react';
import PropTypes from 'prop-types';
import { Button as NativeButton, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
  },
});

export default function Button({ style, ...props }) {
  return (
    <NativeButton
      style={[styles.button, style]}
      {...props} />
  );
};

Button.propTypes = {
  style: PropTypes.any,
};
