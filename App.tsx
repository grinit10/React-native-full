import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.tsx to start working on your app !');
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
        <TextInput placeholder='Course goal' style={{width:'80%', borderColor: 'black', borderWidth: 1, padding:10}}></TextInput>
        <Button title='Add'></Button>
      </View>
      <View>
      </View>
    </View>
  );
}