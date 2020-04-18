import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { Goal } from './Goal.model';

export default function App() {
  const initialCourses: Goal[] = [];
  const [enteredGoal, setenteredGoal] = useState('');
  const [courseGoals, setcourseGoals] = useState(initialCourses);

  const goalInputHandler = (txt: string) => setenteredGoal(txt);

  const addGoalHandler = () => setcourseGoals((currentGoals: Goal[]) => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}])

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course goal'
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}></TextInput>
        <Button title='Add' onPress={addGoalHandler}></Button>
      </View>
      {/* <ScrollView>
        {courseGoals.map(goal =>
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>)}
      </ScrollView> */}
      <FlatList data={courseGoals} renderItem = {goal =>
        <View style={styles.listItem}>
        <Text>{goal.item.value}</Text>
      </View>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
})