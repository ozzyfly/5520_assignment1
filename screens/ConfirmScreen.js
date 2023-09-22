import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

const ConfirmScreen = ({ userData, onEdit, onConfirm }) => {
  return (
    <View style={styles.screen}>
      <Card>
        <Text>Name: {userData.name}</Text>
        <Text>Email: {userData.email}</Text>
        <Text>Phone Number: {userData.phoneNumber}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Edit" onPress={onEdit} />
          <Button title="Confirm" onPress={onConfirm} />
        </View>
      </Card>
    </View>
  );
};

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
});

export default ConfirmScreen;
