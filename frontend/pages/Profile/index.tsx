import React from "react";
import { useNavigation } from "@react-navigation/native";
import OptionsBoxComponent from "../../components/Profile/OptionsBox";
import ProfileBoxComponent from "../../components/Profile/ProfileBox";
import { Arrow, BackButton, Screen } from './style'


export default function Profile() {
    const navigation = useNavigation()
    return (
        <Screen>
            <BackButton
                onPress={() => { navigation.goBack() }}
            >
                <Arrow source={require('../../assets/Voltar Seta.png')} />
            </BackButton>

            <ProfileBoxComponent />
            <OptionsBoxComponent />
        </Screen>
    )
}