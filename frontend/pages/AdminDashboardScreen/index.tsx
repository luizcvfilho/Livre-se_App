import React from "react";
import { View } from "react-native";
import { BackArrow, EachProfileContainer, EditProfileBar, EditProfileText, EtcIcon, HorizontalContainer, PageText, ProfilePic, ProfilesContainer, Screen, SearchBarID, SearchBarIDIcons, SearchBarIDView, TitlePage } from "./style";

export default function AdminDashboardScreen() {
    return (
        <Screen>
            <BackArrow source={require("../../assets/Voltar Seta.png")}/>
            <TitlePage>Admin Dashboard</TitlePage>
            <PageText>ID Search</PageText>
            <SearchBarIDView>
                <SearchBarIDIcons source={require("../../assets/Icone Lupa.png")}/>
                <SearchBarID placeholder="Procure Usuários pelo ID"></SearchBarID>
            </SearchBarIDView>
            <PageText>Recent Users</PageText>
            <ProfilesContainer>
                <HorizontalContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>               
                </HorizontalContainer>
                <HorizontalContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>               
                </HorizontalContainer>
                <HorizontalContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>
                    <EachProfileContainer>
                        <ProfilePic source={require("../../assets/Perfil.png")}/>
                        <EditProfileBar>
                            <EditProfileText>Editar</EditProfileText>
                        </EditProfileBar>
                    </EachProfileContainer>               
                </HorizontalContainer>
                <EtcIcon source={require("../../assets/EtcIcon.svg")}/>
            </ProfilesContainer>
        </Screen>
    );
}