import { BackArrow, BackButton, CartButton, CartButtonText, DescriptionSection, DescriptionText, DescriptionTitle, DetailInfoBar, DetailInfoText, DetailInfoType, DetailsSection, DivBar, FavButton, FavIcon, PriceSection, ProductImage, ProductName, ProductPrice, RatingBar, RatingSection, RatingSmallSection, RatingStar, RatingText, Screen, SectionBar, SectionImage } from "./style";

import React, { useEffect, useState } from "react";
import productServices from "../../services/productServices";
import { useNavigation } from "@react-navigation/native";
import userServices from "../../services/userServices";




export default function ProductScreen({ route }) {

    const pdtid = route.params.id;
    let imgSrc = "../../assets/BackArrow.svg";

    const [product, setProduct] = useState<productInfo>();

    // const [favorited, setFavorite] = useState();

    function FavoritePress() {
        let favorites = ['nada']
        userServices.seeFavorites(1).then(response => {
            favorites = response?.data.list.favoring
            console.log(favorites[0], 'kk')
        })
        // favorites.map((product) => {
        //     if (product.id == parseInt(pdtid)) {
        //         userServices.unfavoriteProduct(1, pdtid).then(response => (
        //             console.log('Desfavoritado')
        //         ))
        //     }
        //     else {
        //         userServices.favoriteProduct(1, pdtid).then(response => (
        //             console.log('Favoritado', response?.data, pdtid, product.id)
        //         ))
        //     }
        // })
        for (let i of favorites) {
            if (i.id == parseInt(pdtid)) {
                return (
                    userServices.unfavoriteProduct(1, pdtid).then(response => (
                    console.log('Desfavoritado')
                )))
            }
            else {
                userServices.favoriteProduct(1, pdtid).then(response => (
                    console.log('Favoritado', response?.data, pdtid, i.id)
                ))
            }
        }

    }

    // useEffect(() => {
    //     let favorites = ['nada']
    //     userServices.seeFavorites(1).then(response => {
    //         favorites = response?.data.list.favoring
    //         console.log(favorites, 'kk')
    //         // for (let i of favorites) {
    //     if (i.id == pdtid) {
    //         userServices.unfavoriteProduct(1, pdtid).then(response => (
    //             console.log('Desfavoritado')
    //         ))
    //     }
    //     else {
    //         userServices.favoriteProduct(1, pdtid).then(response => (
    //             console.log('Favoritado', response?.data)
    //         ))
    //     }
    // }

    // })



    //<----- V1 ----->

    // if (favorited == false) {
    //     userServices.favoriteProduct(1, pdtid).then(response => (
    //         console.log('Favoritado')
    //     ))
    // }
    // else {
    //     userServices.unfavoriteProduct(1, pdtid).then(response => (
    //         console.log('Desfavoritado')
    //     ))
    // }
    // }, [favorited])


    useEffect(() => {
        productServices.getProduct(pdtid).then(response => (
            console.log(response?.data),
            setProduct(response?.data.product)
        ))
    }, [])
    interface productInfo {
        id: number;
        author: string;
        title: string;
        publishers: string;
        genre: string;
        synopsis: string;
        publicationYear: string;
        price: number;
        image: string;
        quantity: number;
        condition: string;
    }

    const navigation = useNavigation()

    return (

        <Screen>
            <SectionBar>
                <BackButton
                    onPress={() => { navigation.goBack() }}
                >
                    <BackArrow source={require("../../assets/BackArrow.svg")} />
                </BackButton>
                <FavButton
                    onPress={() => FavoritePress()}
                >
                    <FavIcon source={require("../../assets/FavIcon.svg")} />
                </FavButton>
            </SectionBar>
            <SectionImage>
                <ProductImage source={{ uri: product?.image }} />
            </SectionImage>
            <PriceSection>
                <ProductName>{product?.title}</ProductName>
                <ProductPrice>R$ {product?.price.toFixed(2)}</ProductPrice>
                <CartButton>
                    <CartButtonText>Adicionar ao Carrinho</CartButtonText>
                </CartButton>
            </PriceSection>
            <DescriptionSection>
                <DivBar></DivBar>
                <DescriptionTitle>Descrição</DescriptionTitle>
                <DescriptionText>{product?.synopsis}</DescriptionText>
            </DescriptionSection>
            <DetailsSection>
                <DivBar></DivBar>
                <DescriptionTitle>Detalhes</DescriptionTitle>
                <DetailInfoBar>
                    <DetailInfoText>Gênero</DetailInfoText>
                    <DetailInfoType>{product?.genre}</DetailInfoType>
                </DetailInfoBar>
                <DetailInfoBar>
                    <DetailInfoText>Estado:</DetailInfoText>
                    <DetailInfoType>{product?.condition}</DetailInfoType>
                </DetailInfoBar>
            </DetailsSection>
            <RatingSection>
                <DivBar></DivBar>
                <RatingSmallSection>
                    <RatingText>Avaliações(3)</RatingText>
                    <RatingBar>
                        <RatingStar source={require("../../assets/FullStar.svg")} />
                        <RatingStar source={require("../../assets/FullStar.svg")} />
                        <RatingStar source={require("../../assets/FullStar.svg")} />
                        <RatingStar source={require("../../assets/FullStar.svg")} />
                        <RatingStar source={require("../../assets/HalfStar.png")} />
                    </RatingBar>
                </RatingSmallSection>
            </RatingSection>
        </Screen>
    );
}
