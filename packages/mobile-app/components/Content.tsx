import React from 'react';
import { Text, View } from 'react-native';
import { Dashboard } from './contents/Dashboard';
import { Modifier } from './contents/Modifier';
import { Timeclock } from './contents/Timeclock';

export function Content(props: any) {
    let content = <></>
    
    if(props.content) {
        if(props.content === 'Dashboard')
            content = <Dashboard />

        if(props.content === 'Timeclock')
            content = <Timeclock />

        if(props.content === 'Modifier')
            content = <Modifier />
    }
    else
        <Text>Something went wrong</Text>
        
    return (content);
}