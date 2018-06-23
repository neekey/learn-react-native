import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Input from '../input';

const styles = StyleSheet.create({});

export default function NewPlaceName({ onChangeText, value }) {
  return (
      <Input
        placeholder="new place name"
        onChangeText={onChangeText}
        value={value} />
    );
  }

NewPlaceName.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};
