import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export function Timeclock() {
    return (
        <View>
            <TouchableHighlight 
                style={ styles.button } 
                activeOpacity={ 0.6 }
                underlayColor="#DDDDDD"
                onPress={() => {}}>
                    <Text style={ styles.text }>To point</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 150,
        width: 150,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        borderWidth: 0.5,
        borderRadius: 100,
        borderColor: 'black',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
})