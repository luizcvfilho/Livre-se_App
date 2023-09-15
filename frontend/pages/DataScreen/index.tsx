import React from "react";
import { View } from "react-native";
import { BackArrow, EditProfileContainer, EditProfileText, InfoBar, InfoBarIcons, InfoBarText, ProfileInfoContainer, ProfileInfoText, ProfilePicContainer, ProfilePicElipse, Screen, TitlePage } from "./style";

export default function DataScreen() {
    return (
        <Screen>
            <BackArrow source={require("../../assets/Voltar Seta.png")}/>
            <TitlePage>Meus Dados</TitlePage>
            <ProfilePicContainer>
                <ProfilePicElipse source={require("../../assets/Perfil.png")}/>
                <EditProfileContainer>
                    <EditProfileText>EDITAR PERFIL</EditProfileText>
                </EditProfileContainer>
            </ProfilePicContainer>
            <ProfileInfoContainer>
                <ProfileInfoText>Informações Pessoais</ProfileInfoText>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/EmailIcon.svg")}/>
                    <InfoBarText>E-mail</InfoBarText>
                </InfoBar>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/CPFIcon.svg")}/>
                    <InfoBarText>CPF</InfoBarText>
                </InfoBar>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/NameIcon.svg")}/>
                    <InfoBarText>Nome Completo</InfoBarText>
                </InfoBar>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/PhoneIcon.svg")}/>
                    <InfoBarText>Telefone/Celular</InfoBarText>
                </InfoBar>
                <ProfileInfoText>Endereço</ProfileInfoText>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/Icone Mail.png")}/>
                    <InfoBarText>CEP</InfoBarText>
                </InfoBar>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/PingIcon.svg")}/>
                    <InfoBarText>Cidade</InfoBarText>
                </InfoBar>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/PingIcon.svg")}/>
                    <InfoBarText>Estado</InfoBarText>
                </InfoBar>
                <InfoBar>
                    <InfoBarIcons source={require("../../assets/PingIcon.svg")}/>
                    <InfoBarText>Endereço Completo</InfoBarText>
                </InfoBar>
            </ProfileInfoContainer>
        </Screen>
    )
}