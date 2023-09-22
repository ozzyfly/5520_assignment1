import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [userData, setUserData] = useState({ name: '', email: '', phoneNumber: '' });
  const [isValid, setIsValid] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [wantsPlayAgain, setWantsPlayAgain] = useState(false);

  const handleStart = (data) => {
    setUserData(data);
    setIsValid(true);
  };

  const handleConfirm = () => {
    setHasConfirmed(true);
  };

  const handleEdit = () => {
    setIsValid(false);
    setHasConfirmed(false);
  };
  

  const handlePlayAgain = () => {
    setWantsPlayAgain(true);
    setIsValid(false);
    setHasConfirmed(false);
  };

  const handleReset = () => {
    setUserData({ name: '', email: '', phoneNumber: '' });
    setIsValid(false);
    setHasConfirmed(false);
    setWantsPlayAgain(false);
  };

  let content = <StartScreen userData={userData} onStart={handleStart} onReset={handleReset} />;

  if (isValid && !hasConfirmed) {
    content = <ConfirmScreen onEdit={handleEdit} onConfirm={handleConfirm} userData={userData} />;
  } else if (hasConfirmed || wantsPlayAgain) {
    content = <GameScreen onPlayAgain={handlePlayAgain} onLogout={handleReset} />;
  }
  

  return <View style={styles.screen}>{content}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
