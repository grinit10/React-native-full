import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = (props: any) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Text>You have chosen {selectedNumber}</Text>
    }

    const numberInputHandler = (val: string) => setEnteredValue(val.replace(/[^0-9]/g, ''));
    
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99', [{
                style: 'destructive',
                text: 'Okay',
                onPress: resetInputHandler
            }])
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Select a number</Text>
                    <Input style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        blurOnSubmit keyboardType='number-pad' maxLength={2}></Input>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' onPress={() => { setEnteredValue(''); setConfirmed(false) }} color={colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirm' onPress={confirmInputHandler} color={colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 2
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: "center"
    }
});

export default StartGameScreen;