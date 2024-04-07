import React from 'react';
import { View, Text } from 'react-native';
import { Navbar } from './Navbar';

export function Contents(props: any) {
    let txt = props.txt;
    return (
        <View>
            <Text>{props.txt}</Text>
        </View>
    );
}