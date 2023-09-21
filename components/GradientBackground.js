import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = (props) => {
  return (
    <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.gradient}>
      <View style={props.style}>{props.children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default GradientBackground;