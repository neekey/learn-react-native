import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default function Input({ style, ...props }) {
  return (
    <TextInput
      style={[styles.input, style]}
      underlineColorAndroid="transparent"
      {...props} />
  );
};

Input.propTypes = {
  style: PropTypes.any,
};
