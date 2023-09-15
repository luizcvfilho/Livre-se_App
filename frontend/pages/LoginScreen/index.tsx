import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { View, Text } from "react-native";
import userServices from "../../services/userServices";
import { BackArrow, BackButton, ButtonText, Container, EnterButton, ForgotPassword, InputBar, InputBarImage, LoginButton, Logo, Nav, Screen, SocialImage, Title, Type, TypeBars } from "./style";
import { AuthContext } from "../../contexts/auth";
import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {

    interface loginData {
        email: string;
        password: string;
        userId:string;
    }


    const { control, handleSubmit, formState: { errors } } = useForm<loginData>()

    // const Auth = useContext(AuthContext);
    const onSubmit = (data: loginData) => {
        userServices.login(data).then(response => {
            const token = response?.data.acess_token
            const userId = parseInt(data.userId)
            AsyncStorage.setItem('token', 'Bearer '.concat(token))
            AsyncStorage.setItem('userId', JSON.stringify(userId) )
            console.log(response?.data.acess_token)
            navigation.navigate('Home')
            // navigation.navitate
        })
    }


    const navigation = useNavigation()


    return (
            <Screen>
                <BackButton
                    onPress={() => { navigation.goBack() }}
                >
                    <BackArrow source={require("../../assets/Voltar Seta.png")} />
                </BackButton>
                <Logo source={require("../../assets/Logo.png")} />
                <Container>
                    <Title>Login</Title>
                    <TypeBars>
                        <InputBar>
                            <InputBarImage source={require("../../assets/EmailIcon.svg")} />
                            <Controller
                                name='email'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Type
                                        placeholder="E-mail"
                                        onChangeText={onChange}
                                        value={value}
                                    />

                                )}
                            />
                        </InputBar>
                        <InputBar>
                            <InputBarImage source={require("../../assets/PasswordIcon.svg")} />
                            <Controller
                                name='password'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Type
                                        placeholder="Senha"
                                        onChangeText={onChange}
                                        value={value}
                                    />

                                )}
                            />

                        </InputBar>
                    </TypeBars>
                    <ForgotPassword
                        onPress={() => {
                            navigation.navigate('Recover Password')
                        }}
                    >
                        Esqueci minha senha
                    </ForgotPassword>
                    <Nav>
                        <LoginButton>
                            <SocialImage source={require("../../assets/facebooklogo.png")} />
                        </LoginButton>
                        <LoginButton>
                            <SocialImage source={require("../../assets/googlelogo.png")} />
                        </LoginButton>
                    </Nav>
                    <EnterButton
                        onPress={handleSubmit(onSubmit)}
                    >
                        <ButtonText><Text>ENTRAR</Text></ButtonText>
                    </EnterButton>
                </Container>
            </Screen>
    );
}
