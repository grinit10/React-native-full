import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';

export default function App() {
  const [] = useState('Open up App.tsx to start working on your app !');
  return (
    <View style={styles.container}>
      <ComponentScreen></ComponentScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
