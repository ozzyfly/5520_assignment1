import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Card from '../components/Card';

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
        <Text>Name</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName} 
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Text>Email</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text>Phone Number</Text>
        <TextInput 
          style={styles.input} 
          value={phoneNumber} 
          onChangeText={setPhoneNumber} 
        />
        {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

        <View style={styles.checkboxContainer}>
          <Button title="Checkbox" onPress={() => setCheckboxSelected(!checkboxSelected)} />
          <Text>{checkboxSelected ? '✅' : '❌'}</Text>
        </View>

        <Button title="Reset" onPress={handleReset} />
        <Button title="Start" onPress={handleStart} disabled={!checkboxSelected} />
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
