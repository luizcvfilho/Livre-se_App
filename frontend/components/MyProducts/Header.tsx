import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Arrow, BackButton, Header, HeaderTitle } from "./style";

export default function HeaderComponent() {
    const navigation = useNavigation()
    return (
        <Header>
            <BackButton
            onPress={()=>{
                navigation.goBack()
            }}
            >
                <Arrow source={require('../../assets/Voltar Seta.png')} />
            </BackButton>
            <HeaderTitle>Meus Anúncios</HeaderTitle>
        </Header>

    )
}