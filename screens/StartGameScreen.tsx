import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';

const StartGameScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>Start a new game</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a number</Text>
                <TextInput></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Reset' onPress={() => { }} color={colors.accent}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirm' onPress={() => { }} color={colors.primary}/>
                    </View>
                </View>
            </Card>
        </View>
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
    }
});

export default StartGameScreen;