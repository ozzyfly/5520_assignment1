import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import Card from '../components/Card';

const GameScreen = ({ onLogout }) => {
  const [generatedNumber, setGeneratedNumber] = useState(generateRandom());
  const [userGuess, setUserGuess] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);

  function generateRandom() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }

  const handleConfirm = () => {
    setAttemptCount(attemptCount + 1);
    if (parseInt(userGuess) === generatedNumber) {
      setIsGuessCorrect(true);
    }
  };

  const handlePlayAgain = () => {
    setIsGuessCorrect(false);
    setUserGuess('');
    setAttemptCount(0);
    setGeneratedNumber(generateRandom());
  };

  return (
    <View style={styles.screen}>
      <Button title="Logout" onPress={onLogout} style={styles.logoutButton} />

      <Card>
        {!isGuessCorrect ? (
          <>
            <Text>Guess a number between 10 and 20</Text>
            <TextInput 
              value={userGuess} 
              onChangeText={setUserGuess} 
              keyboardType="numeric"
              style={styles.input}
            />
            <Button title="Confirm" onPress={handleConfirm} />

            {parseInt(userGuess) !== generatedNumber && attemptCount > 0 ? (
              <View>
                <Image source={require('../assets/a_sad_smiley_face.jpg')} style={styles.image} />
                <Text>Try Again!</Text>
              </View>
            ) : null}
          </>
        ) : (
          <View>
            <Text>You've guessed it in {attemptCount} tries!</Text>
            <Image source={{ uri: `https://picsum.photos/id/${generatedNumber}/100/100` }} style={styles.image} />
            <Button title="New Game" onPress={handlePlayAgain} />
          </View>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  input: {
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default GameScreen;
