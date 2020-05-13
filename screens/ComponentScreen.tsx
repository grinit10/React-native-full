import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const ComponentScreen = (props: any) => {

    const myName = 'Arnab';
    return (
        <View >
            <Text style={styles.headerText}>Getting started with React Native!</Text>
            <Text style={styles.nameText}>My name is {myName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 45
    },
    nameText: {
        fontSize: 20
    },
});


export default ComponentScreen;