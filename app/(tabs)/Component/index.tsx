import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface InputProps {
    name: string;
    onChangeText: (text: string) => void;
}

const Input = (props: InputProps) => {
    const { name, onChangeText } = props;
    console.log(name);
    return (
        <View>
            <Text>Input your name:</Text>
            <TextInput style={{ borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 5 }} placeholder="Name" onChangeText={onChangeText}/>
        </View>
    );
};

export default Input;