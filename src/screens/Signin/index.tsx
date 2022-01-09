import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/Buttonicon';
import { Home } from '../Home';
import { styles } from './styles';


export function SignIn() {
    // const [text, setText] = useState('')
    const navigation = useNavigation();

    function handleSignin() {
        navigation.navigate('Home');
    }
    return (
        <Background>
            <View style={styles.container}>

                <Image source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas  {'\n'}
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>
                    <ButtonIcon title='Entrar com discord'
                        onPress={handleSignin}
                    />
                </View>
            </View>
        </Background>
    );
}