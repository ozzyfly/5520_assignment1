import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ label, value, onChangeText, error }) => (
  <>
    <Text>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </>
);

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: 'white',
  },
  errorText: {
    color: 'white',
    marginBottom: 10,
  },
});

export default CustomInput;
