import { PrivateValueStore, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import CartServices from "../../services/CartServices";
import { Card, CardImage, CardText, CardTextView, IconImage, IconPress, IconsContainer } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteServices from "../../services/FavoriteServices";

const FavoriteStatusEmpty = require("../../assets/FavoriteIconEmpty.svg")
const FavoriteStatusFull = require("../../assets/FavoriteIconFull.svg")

interface UserProductCardInfo {
    title: string
    image: string
    ProductUse: string
    price: number
    condition: string
    id: number
}

export default function UserProductCardFavorite() {
    
    const [products, setProducts] = useState<UserProductCardInfo[]>();

    useEffect(() => {
        FavoriteServices.getFav(1).then(response => (
            console.log(response?.data.list.favoring),
            setProducts(response?.data.list.favoring)
        ))
    }, [])

    const UnfavProduct = (iduser:number, id:number,) => {
        FavoriteServices.unFav(iduser, id).then(res => {
        })
    }

    return(
        <>
        {
            products?.map((product) => {
            return(
                <Card>
                <CardImage source={{uri:product.image}}></CardImage>
                <CardTextView>
                    <CardText>{product.title}</CardText>
                    <CardText>{product.condition}</CardText>
                    <CardText>R${product.price.toFixed(2)}</CardText>
                </CardTextView>
                <IconsContainer>
                    <IconPress onPress={ () => {UnfavProduct(1, product.id)}}>
                        <IconImage source={require("../../assets/FavoriteIconFull.svg")}/>
                    </IconPress>
                </IconsContainer>
                </Card>
            );
            })}
        </>
    );
}