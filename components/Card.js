import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => <View style={styles.card}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
  },
});

export default Card;
