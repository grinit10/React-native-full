import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { Goal } from './Goal.model';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const initialCourses: Goal[] = [];
  const [courseGoals, setcourseGoals] = useState(initialCourses);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = (enteredGoal: string) => {
    setcourseGoals((currentGoals: Goal[]) => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
    setIsAddMode(false);
  }

  const deleteGoalHandler = (key: string) => setcourseGoals((currentGoals: Goal[]) => currentGoals.filter(x => x.key !== key))

  const closeModal = () => setIsAddMode(false)

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)}></Button>
      <GoalInput visible = {isAddMode} onAddGoalHandler = {addGoalHandler} onCloseModal = {closeModal}/>
      {/* <ScrollView>
        {courseGoals.map(goal =>
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>)}
      </ScrollView> */}
      <FlatList data={courseGoals} renderItem={goal => <GoalItem goal= {goal.item} onDelete = {deleteGoalHandler}/>} />
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