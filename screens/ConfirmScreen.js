import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton'; 
import colors from '../colors';
import GradientBackground from '../components/GradientBackground'; 

const ConfirmScreen = ({ userData: { name, email, phoneNumber }, onEdit, onConfirm }) => {
  return (
    <GradientBackground style={styles.screen}>
      <Card>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Phone Number: {phoneNumber}</Text>

        <View style={styles.buttonContainer}>
          <CustomButton title="Edit" onPress={onEdit} style={[styles.button, styles.editButton]} />
          <CustomButton title="Confirm" onPress={onConfirm} style={[styles.button, styles.confirmButton]} />
        </View>
      </Card>
      </GradientBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF', 
    marginBottom: 10, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.primary, 
  },
  editButton: {
    marginRight: 10, 
  },
  confirmButton: {
    marginLeft: 10, 
  },
});

export default ConfirmScreen;