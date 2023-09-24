import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Card from '../components/Card';
import CustomInput from '../components/CustomInput'; 
import CustomButton from '../components/CustomButton'; 


const StartScreen = ({ onStart, onReset, userData }) => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  const [checkboxSelected, setCheckboxSelected] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phoneNumber: '' });

  const validateInput = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phoneNumber: '' };

    if (name.length < 2 || !isNaN(name)) {
      newErrors.name = 'Please enter a valid name.';
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email.';
      isValid = false;
    }

    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setCheckboxSelected(false);
    setErrors({ name: '', email: '', phoneNumber: '' });
  };

  const handleStart = () => {
    if (validateInput()) {
      const userData = { name, email, phoneNumber };
      onStart(userData);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.screen}>
      <Card>
        <CustomInput label="Name" value={name} onChangeText={setName} error={errors.name} />
        <CustomInput label="Email" value={email} onChangeText={setEmail} error={errors.email} />
        <CustomInput label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} error={errors.phoneNumber} />

        <View style={styles.checkboxContainer}>
          <Button title="I am not a robot" onPress={() => setCheckboxSelected(!checkboxSelected)} />
          <Text>{checkboxSelected ? '✅' : '❌'}</Text>
        </View>

        <CustomButton title="Reset" onPress={handleReset} />
        <CustomButton title="Start" onPress={handleStart} disabled={!checkboxSelected} />
      </Card>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  }
});

export default StartScreen;
