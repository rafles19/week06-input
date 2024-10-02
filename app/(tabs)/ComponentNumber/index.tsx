import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface NumberInputProps {
    nim: string;
    onChangeText: (text: string) => void;
}

const NumberInput = (props: NumberInputProps) => {
    const { nim, onChangeText } = props;

    const handleTextChange = (text: string) => {
        // Hanya izinkan input numerik
        const numericText = text.replace(/[^0-9]/g, '');
        onChangeText(numericText);
    };

    return (
        <View>
             <Text>Input your nim:</Text>
            <TextInput
                style={{ borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 5 }}
                placeholder="NIM"
                onChangeText={handleTextChange}
                keyboardType='numeric'
                value={nim}
            />
        </View>
    );
}

export default NumberInput;