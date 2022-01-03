import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export function SignIn() {
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <Text>Hello World, 2022 </Text>
            <TextInput
                style={styles.input}
                onChangeText={setText} />
            <text>
                Você digitou: {text}
            </text>
        </View>
    );
}