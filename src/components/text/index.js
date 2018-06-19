import React from 'react';
import PropTypes from 'prop-types';
import { Text as NativeText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
  },
});

export default function Text({ style, ...props }) {
  return (
    <NativeText
      style={[styles.text, style]}
      {...props} />
  );
};

Text.propTypes = {
  style: PropTypes.any,
};
