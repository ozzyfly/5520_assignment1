import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  // Define state variables using the useState hook
  const [userData, setUserData] = useState({ name: '', email: '', phoneNumber: '' });
  const [isValid, setIsValid] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [wantsPlayAgain, setWantsPlayAgain] = useState(false);

  // Function to handle the start of the game
  const handleStart = (data) => {
    setUserData(data);
    setIsValid(true);
  };

  // Function to handle confirmation of user data
  const handleConfirm = () => {
    setHasConfirmed(true);
  };

  // Function to handle editing user data
  const handleEdit = () => {
    setIsValid(false);
    setHasConfirmed(false);
  };
  
  // Function to handle playing the game again
  const handlePlayAgain = () => {
    setWantsPlayAgain(true);
    setIsValid(false);
    setHasConfirmed(false);
  };

  // Function to handle resetting the application to initial state
  const handleReset = () => {
    setUserData({ name: '', email: '', phoneNumber: '' });
    setIsValid(false);
    setHasConfirmed(false);
    setWantsPlayAgain(false);
  };

  // Define the content to be displayed based on the application state
  let content = <StartScreen userData={userData} onStart={handleStart} onReset={handleReset} />;

  if (isValid && !hasConfirmed) {
    content = <ConfirmScreen onEdit={handleEdit} onConfirm={handleConfirm} userData={userData} />;
  } else if (hasConfirmed || wantsPlayAgain) {
    content = <GameScreen onPlayAgain={handlePlayAgain} onLogout={handleReset} />;
  }

  // Return the main view of the application
  return <View style={styles.screen}>{content}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
