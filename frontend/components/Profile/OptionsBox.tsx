import { useNavigation } from "@react-navigation/native";
import React from "react";
import { OptionsBox, OptionText, Option } from "./style";

export default function OptionsBoxComponent() {

    const navigation = useNavigation()
    return (
        <OptionsBox>
            <Option
            onPress={() => {
                navigation.navigate('Profile Edit')
            }}
            >
                <OptionText>Meus Dados</OptionText>
            </Option>
            <Option>
                <OptionText>Endereços</OptionText>
            </Option>
            <Option>
                <OptionText>Privacidade</OptionText>
            </Option>
            <Option
                onPress={() => {
                    navigation.navigate('Favorites')
                }}
            >
                <OptionText>Favoritos</OptionText>
            </Option>
            <Option
                onPress={() => {
                    navigation.navigate('My Products')
                }}
            >
                <OptionText>Meus Anúncios</OptionText>
            </Option>
            <Option>
                <OptionText>Meus Pedidos</OptionText>
            </Option>
        </OptionsBox>
    )
}