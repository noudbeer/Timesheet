import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export function Dashboard() {
    return (
        <View style={styles.main}>
            <View style={styles.bar}>
                <TouchableHighlight 
                    style={styles.button}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => {}}>
                    <Text style={styles.text}>Jour</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={styles.button}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => {}}>
                    <Text style={styles.text}>Semaine</Text>
                </TouchableHighlight>
                
                <TouchableHighlight 
                    style={styles.button}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => {}}>
                    <Text style={styles.text}>Mois</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={styles.button}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => {}}>
                    <Text style={styles.text}>Année</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.content}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    bar: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'flex-start',
        alignSelf: 'stretch',
    },
    button: {
        flex: 1,
        backgroundColor: '#eeeeee',
        borderWidth: 0.2,
        borderColor: '#bcbcbc',
        padding: 6,
    }, 
    text: {
        fontSize: 19,
        alignSelf: 'center',
        alignContent: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: 'red'
    },
})