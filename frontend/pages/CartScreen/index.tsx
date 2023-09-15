import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, View } from "react-native";
import UserProductCard from "../../components/UserProductCard";
import { BackArrow, BuyButtonText, BuyButtonView, CardsContainer, PriceBar, PriceText, Screen, TitlePage } from "./style";

export default function CartScreen() {


    return (
        <Screen>
            <BackArrow source={require("../../assets/Voltar Seta.png")}/>
            <TitlePage>Carrinho</TitlePage>
            <CardsContainer>
                <UserProductCard></UserProductCard>
                <BuyButtonView>
                    <BuyButtonText>Comprar</BuyButtonText>
                </BuyButtonView>
            </CardsContainer>
        </Screen>
    );
}
    