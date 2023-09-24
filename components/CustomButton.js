import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const CustomButton = ({ style, ...otherProps }) => (
  <View style={[styles.buttonContainer, style]}>
    <Button {...otherProps} />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default CustomButton;
