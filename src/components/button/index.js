import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd-mobile-rn';

export default function Button({ style, title, color, onPress, ...props }) {
  const extraStyle = {};
  if (color) {
    extraStyle.backgroundColor = color;
  }
  return (
    <AntButton onClick={onPress} style={style} children={title} {...props} />
  );
};

Button.propTypes = {
  style: PropTypes.any,
  title: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};
