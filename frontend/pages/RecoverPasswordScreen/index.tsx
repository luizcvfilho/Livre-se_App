import { View } from "react-native";
import { BackArrow, ButtonText, Container, DescText, EnterButton, InputBar, InputBarImage, Logo, Screen, TextView, Title, Type } from "./style";

export default function RecoverPasswordScreen() {
    return (
        <Screen>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <Logo source={require("../../assets/Logo.png")}/>
            <Container>
                <Title>Recuperar Senha</Title>
                <TextView>
                    <DescText>Digite o e-mail correspondente à conta para receber um código de recuperação</DescText>
                    <InputBar>
                        <InputBarImage source={require("../../assets/EmailIcon.svg")}/>
                        <Type placeholder="E-mail"></Type>
                    </InputBar>
                </TextView>
                <EnterButton>
                    <ButtonText>Enviar Código</ButtonText>
                </EnterButton>
            </Container>
        </Screen>
    );
  }