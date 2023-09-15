import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Arrow } from "../Register/style";
import { EnterBtn, Logo, RegLink, Screen } from './style'
import { Text } from "react-native";

export default function StartPage() {
    const navigation = useNavigation()
    return (
        <Screen>
            <Logo source={require('../../assets/Logo.jpg')} />
            <EnterBtn
                onPress={() => {
                    navigation.navigate('Login Screen')
                }}
            >
                <Text>ENTRAR</Text>
            </EnterBtn>
            <RegLink
            onPress={()=>{
                navigation.navigate('Register')
            }}
            >
                <Text>Não possui uma conta? Cadastre-se</Text>
            </RegLink>
        </Screen>
    )
}