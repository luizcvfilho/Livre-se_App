import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ArrowWhite, BackButton, Header, HeaderTitle } from "./style";


export default function HeaderComp() {
    const navigation = useNavigation()
    return (
        <Header>
            <BackButton
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <ArrowWhite source={require('../../assets/Voltar Seta branca.png')} />
            </BackButton>
            <HeaderTitle>Editar Perfil</HeaderTitle>
        </Header>
    )
}
