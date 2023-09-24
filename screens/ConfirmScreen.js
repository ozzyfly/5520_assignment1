import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const ConfirmScreen = ({ userData: { name, email, phoneNumber }, onEdit, onConfirm }) => (
  <View style={styles.screen}>
    <Card>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title="Edit" onPress={onEdit} style={styles.editButton} />
        <CustomButton title="Confirm" onPress={onConfirm} style={styles.confirmButton} />
      </View>
    </Card>
  </View>
);


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  editButton: {
    marginRight: 10, // adds a margin to separate the buttons
  },
  confirmButton: {
    marginLeft: 10, // adds a margin to separate the buttons
  },
});

export default ConfirmScreen;
