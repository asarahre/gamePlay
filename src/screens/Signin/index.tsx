import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

3
export function SignIn() {
    // const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparert"
                translucent
            />
            <Image source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {'\n'}
                    suas jogatinas {'\n'}
                    facilmente  {'\n'}
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>
            </View>
        </View>
    );
}