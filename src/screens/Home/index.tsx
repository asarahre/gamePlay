import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";


import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Appoinments } from "../../components/Appoinments";

export function Home() {
    const [category, setCategory] = useState('');

    const appoinments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
    ]


    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(category)
    }
    return (
        <Background>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>
            </View>

            <View>
                <CategorySelect
                    CategorySelect={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader
                        title={"Partidas agendadas"}
                        subtitle={" Total 6"}
                    />
                    <FlatList

                        data={appoinments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appoinments data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />

                </View>
            </View>
        </Background>
    );
}