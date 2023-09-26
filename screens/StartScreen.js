import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Card from '../components/Card';
import CustomInput from '../components/CustomInput'; 
import CustomButton from '../components/CustomButton';
import Checkbox from '../components/Checkbox';
import colors from '../colors';


const StartScreen = ({ onStart, onReset, userData = { name: '', email: '', phoneNumber: '' } }) => {
  const [formData, setFormData] = useState(userData);
  const [checkboxSelected, setCheckboxSelected] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phoneNumber: '' });

  const { name, email, phoneNumber } = formData;

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

  const handleReset = useCallback(() => {
    setFormData({ name: '', email: '', phoneNumber: '' });
    setCheckboxSelected(false);
    setErrors({ name: '', email: '', phoneNumber: '' });
  }, []);

  const handleStart = useCallback(() => {
    if (validateInput()) {
      onStart(formData);
    }
  }, [formData, onStart]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.screen}>
      <Card>
        <CustomInput label="Name" value={name} onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))} error={errors.name} />
        <CustomInput label="Email" value={email} onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))} error={errors.email} />
        <CustomInput label="Phone Number" value={phoneNumber} onChangeText={(text) => setFormData(prev => ({ ...prev, phoneNumber: text }))} error={errors.phoneNumber} />

        <View style={styles.checkboxContainer}>
          <Checkbox isChecked={checkboxSelected} onToggle={() => setCheckboxSelected(!checkboxSelected)} label="I am not a robot" />
          <Text style={{ color: checkboxSelected ? colors.primary : 'red', marginLeft: 10 }}></Text>
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
    backgroundColor: colors.primary, // Applying background color
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  }
});

export default StartScreen;