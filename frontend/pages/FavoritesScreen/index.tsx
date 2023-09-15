import React from "react";
import UserProductCard from "../../components/UserProductCard";
import UserProductCardFavorite from "../../components/UserProductCardFavorite";
import { BackArrow, CardsContainer, Screen, TitlePage } from "./style";

export default function FavoritesScreen() {
    return (
        <Screen>
            <BackArrow source={require("../../assets/Voltar Seta.png")}/>
            <TitlePage>Meus Favoritos</TitlePage>
            <CardsContainer>
                <UserProductCardFavorite></UserProductCardFavorite>
            </CardsContainer>
        </Screen>
    );
}
    