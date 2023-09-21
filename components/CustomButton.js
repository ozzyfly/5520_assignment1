import React from 'react';
import { Button, StyleSheet } from 'react-native';

const CustomButton = (props) => {
  return <Button {...props} style={{ ...styles.button, ...props.style }} />;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    // customize further
  },
});

export default CustomButton;
