import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import GradientBackground from '../components/GradientBackground';

const ConfirmScreen = ({ route, navigation }) => {
  const { name, email, phoneNumber } = route.params;

  return (
    <GradientBackground>
      <Card>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.data}>{name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.data}>{email}</Text>

        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.data}>{phoneNumber}</Text>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Edit"
            onPress={() => navigation.goBack()}
          />
          <CustomButton
            title="Confirm"
            onPress={() => navigation.navigate('GameScreen')}
          />
        </View>
      </Card>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  data: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ConfirmScreen;
