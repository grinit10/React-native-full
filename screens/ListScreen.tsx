import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const ListScreen = (props: any) => {

    const myName = 'Arnab';
    return (
        <Text>List screen</Text>
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


export default ListScreen;