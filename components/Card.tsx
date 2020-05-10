import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const Card = (props: any) => {
return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 2
        },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 10,
        padding: 20,
        borderRadius: 10
    }
})

export default Card;