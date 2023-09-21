import React, { useState } from 'react';
import { View, TextInput, Text, CheckBox, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import GradientBackground from '../components/GradientBackground';
import colors from '../colors';

const StartScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    
    // Name validation
    if (!name || name.length <= 1 || !isNaN(name)) {
      tempErrors.name = 'Please enter a valid name.';
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    // Phone number validation
    if (!phoneNumber || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleStart = () => {
    if (validateForm()) {
      // Move to the next screen or show the Confirm screen
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setCheckbox(false);
    setErrors({});
  };

  return (
    <GradientBackground>
      <Card>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <CheckBox value={checkbox} onValueChange={setCheckbox} />
        <Text>I agree to the terms and conditions.</Text>

        <View style={styles.buttonContainer}>
          <CustomButton title="Reset" onPress={handleReset} />
          <CustomButton
            title="Start"
            onPress={handleStart}
            disabled={!checkbox}
          />
        </View>
      </Card>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default StartScreen;
