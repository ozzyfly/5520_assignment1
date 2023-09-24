import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Modal } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton'; 


const GameScreen = ({ onLogout }) => {
  const [generatedNumber, setGeneratedNumber] = useState(generateRandom());
  const [userGuess, setUserGuess] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const { screen, logoutButton, input, image, buttonContainer, centeredView, modalView } = styles;


  function generateRandom() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }

  const handleConfirm = () => {
    const guess = parseInt(userGuess);
    if (isNaN(guess) || guess < 10 || guess > 20) {
      setFeedback('Please enter a valid number between 10 and 20.');
      return;
    }

    setAttemptCount(attemptCount + 1);
    if (guess === generatedNumber) {
      setIsGuessCorrect(true);
      setFeedback('');
    } else if (guess < generatedNumber) {
      setFeedback('Your guess is too low!');
      setModalVisible(true);
    } else {
      setFeedback('Your guess is too high!');
      setModalVisible(true);
    }
  };

  const handlePlayAgain = () => {
    setIsGuessCorrect(false);
    setUserGuess('');
    setAttemptCount(0);
    setGeneratedNumber(generateRandom());
    setFeedback('');
  };

  const handleResetInput = () => {
    setUserGuess('');
  };

  return (
    <View style={styles.screen}>
      <CustomButton title="Logout" onPress={onLogout} style={logoutButton} />
      <Card>
        {!isGuessCorrect ? (
          <>
            <Text>Guess a number between 10 and 20</Text>
            <TextInput 
              value={userGuess} 
              onChangeText={setUserGuess} 
              keyboardType="numeric"
              style={input}
            />
            <View style={buttonContainer}>
              <CustomButton title="Confirm" onPress={handleConfirm} />
              <CustomButton title="Reset" onPress={handleResetInput} />
            </View>
            <Text>{feedback}</Text>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}
            >
              <View style={centeredView}>
                <View style={modalView}>
                  <Image source={require('../assets/a_sad_smiley_face.jpg')} style={image} />
                  <Text>{feedback}</Text>
                  <CustomButton title="Try Again!" onPress={() => setModalVisible(false)} />
                </View>
              </View>
            </Modal>
          </>
        ) : (
          <View>
            <Text>You've guessed it in {attemptCount} tries!</Text>
            <Text>Congratulations!</Text>
            <Image source={{ uri: `https://picsum.photos/id/${generatedNumber}/100/100` }} style={image} />
            <CustomButton title="New Game" onPress={handlePlayAgain} />
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
    top: 50,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default GameScreen;
