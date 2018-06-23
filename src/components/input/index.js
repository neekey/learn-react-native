import React from 'react';
import PropTypes from 'prop-types';
import { InputItem } from 'antd-mobile-rn';

export default function Input({ onChangeText, ...props }) {
  return (
    <InputItem
      onChange={onChangeText}
      {...props} />
  );
};

Input.propTypes = {
  style: PropTypes.any,
};
