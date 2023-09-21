import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import GradientBackground from '../components/GradientBackground';

const GameScreen = ({ navigation }) => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber());
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [correctGuess, setCorrectGuess] = useState(false);

  function getRandomNumber() {
    return Math.floor(Math.random() * 11) + 10;  // Random number between 10 and 20
  }

  useEffect(() => {
    if (parseInt(guess) === randomNumber) {
      setCorrectGuess(true);
    }
  }, [guess]);

  const handleConfirm = () => {
    if (!correctGuess) {
      setAttempts(attempts + 1);
    }
  };

  const handleNewGame = () => {
    setRandomNumber(getRandomNumber());
    setGuess('');
    setAttempts(0);
    setCorrectGuess(false);
  };

  return (
    <GradientBackground>
      {correctGuess ? (
        <Card>
          <Text>Congratulations!</Text>
          <Text>You guessed the number in {attempts} attempts.</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
            style={styles.image}
          />
          <CustomButton title="New Game" onPress={handleNewGame} />
        </Card>
      ) : (
        <Card>
          <Text>Guess a number between 10 and 20</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={guess}
            onChangeText={setGuess}
          />
          <CustomButton title="Confirm" onPress={handleConfirm} />
          {attempts > 0 && <Text>Attempts: {attempts}</Text>}
        </Card>
      )}
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});

export default GameScreen;
