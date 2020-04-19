import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props: any) => {
    const [enteredGoal, setenteredGoal] = useState('');
    const goalInputHandler = (txt: string) => setenteredGoal(txt);

    const addGoalHandler = () => {
        props.onAddGoalHandler(enteredGoal);
        setenteredGoal('');
    }

    const closeModal = () => {
        setenteredGoal('');
        props.onCloseModal();
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Course goal'
                    style={styles.input}
                    value={enteredGoal}
                    onChangeText={goalInputHandler}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style = {styles.button}><Button title='Add' onPress={() => addGoalHandler()}></Button></View>
                    <View style = {styles.button}><Button title='Close' color='red' onPress={() => closeModal()}></Button></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    button: {
        width: '100%',
        marginBottom: 10
    },
    input: {
        marginBottom: 10,
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GoalInput;