import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, View } from "react-native";
import { theme } from "../../global/styles/themne";
import { styles } from "./styles";
import PlayerSvg from '../../assets/player.svg'
import CalenderSvg from '../../assets/calender.svg'
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";


export type GuildProps = {
    id: string;
    name: string;
    icon: null,
    owner: boolean;
}

export type AppoinmentsProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppoinmentsProps;
}

export function Appoinments({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild
    const { primary, on } = theme.colors

    return (
        <RectButton {...rest} >
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>
                    <View style={styles.footer} >
                        <CalenderSvg />
                        <Text style={styles.date}>
                            {data.date}
                        </Text>
                    </View>

                    <View style={styles.playersInfo}>
                        <PlayerSvg fill={owner ? primary : on} />
                        <Text style={[
                            styles.player, { color: owner ? primary : on }
                        ]}
                        >
                            {owner ? 'Anfitrião' : 'Visitante'}
                        </Text>
                    </View>

                </View>

            </View>
        </RectButton>
    );
}