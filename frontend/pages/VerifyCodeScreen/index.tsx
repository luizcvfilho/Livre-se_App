import { View } from "react-native";
import { BackArrow, ButtonText, Container, DescText, EnterButton, Logo, TextView, Title, Type, Screen } from "./style";

export default function VerifyCodeScreen(){
    return(
        <Screen>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <Logo source={require("../../assets/Logo.png")}/>
            <Container>
                <Title>Recuperar Senha</Title>
                <TextView>
                    <DescText>Digite o código recebido no email</DescText>
                    <Type></Type>
                </TextView>
                <EnterButton>
                    <ButtonText>Enviar</ButtonText>
                </EnterButton>
            </Container>
        </Screen>
    );
}