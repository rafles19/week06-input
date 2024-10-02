import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Input from './Component';
import NumberInput from './ComponentNumber';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const handleChangeMyName = (value: string) => {
    setName(value);
  };

  const handleChangeMyNim = (value: string) => {
    setNim(value);
  }


  return (
    <View style={styles.container}>
      <Text>{name} - {nim}</Text>
      <Input name = {name} onChangeText={handleChangeMyName}/>
      <NumberInput nim = {nim} onChangeText={handleChangeMyNim}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

