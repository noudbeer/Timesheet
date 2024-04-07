import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/Navbar';

export default function App() {  
  const [content, setContent] = useState('Timeclock');

  return (
    <View style={styles.container}>
      <Text style={{margin: 40, fontSize: 25, textAlign: 'center'}}>{ content }</Text>
      <Text>{ content }</Text>
      <Navbar setContent={ setContent } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
