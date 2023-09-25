import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import colors from '../colors';

const CustomButton = ({ style, ...otherProps }) => (
  <View style={[styles.buttonContainer, style]}>
    <Button {...otherProps} color={colors.secondary} /> 
    {/* Applied the secondary color to the button */}
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default CustomButton;
