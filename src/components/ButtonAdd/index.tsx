import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/themne';


export function ButtonAdd({ ...rest }: RectButtonProps) {
    return (

        <RectButton
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    );
}
