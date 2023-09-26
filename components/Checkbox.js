import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../colors';

const Checkbox = ({ isChecked, onToggle, label }) => (
  <View style={styles.checkboxContainer}>
    <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
      {isChecked ? <Text style={{ color: colors.primary }}>✅</Text> : null}
    </TouchableOpacity>
    <Text style={styles.checkboxLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.secondary,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: colors.secondary,
  },
});

export default Checkbox;
