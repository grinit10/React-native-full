import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { FriendModel } from '../models/Friend.model';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = (props: any) => {

    const friends: FriendModel[] = [{
        name: 'Friend 1',
        age: 1
    }, {
        name: 'Friend 2',
        age: 2
    }, {
        name: 'Friend 3',
        age: 3
    }, {
        name: 'Friend 4',
        age: 4
    }, {
        name: 'Friend 5',
        age: 5
    }, {
        name: 'Friend 6',
        age: 6
    }]
    return (
        <FlatList data={friends} keyExtractor={(friend) => friend.name} renderItem={({ item }) => {
        return (<Text style={styles.text}>{item.name} - Age: {item.age}</Text>)
        }}></FlatList>
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 50,
    }
});


export default ListScreen;