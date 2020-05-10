import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.tsx to start working on your app !');
  return (
    <View style={styles.screen}>
      <Header title='Guess a number'></Header>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
