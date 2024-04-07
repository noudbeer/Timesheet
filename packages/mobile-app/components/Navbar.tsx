import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export function Navbar(props: any) {
    const setContent = props.setContent;

    return (
        <View style={styles.bar}>
            <TouchableHighlight 
                style={styles.button} 
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { setContent('Dashboard') }}>
                <Text style={styles.text}>Dashbard</Text>
            </TouchableHighlight>

            <TouchableHighlight 
                style={styles.button} 
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { setContent('Timeclock') }}>
                <Text style={styles.text}>Timeclock</Text>
            </TouchableHighlight>
            
            <TouchableHighlight 
                style={styles.button} 
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { setContent('Modifier') }}>
                <Text style={styles.text}>Modifier</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignSelf: 'stretch',
        height: 70,
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        borderWidth: 0.2,
        borderColor: '#bcbcbc',
    }, 
    text: {
        fontSize: 20,
        alignSelf: 'center',
        alignContent: 'center',
    }
})