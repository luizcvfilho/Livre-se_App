import { PrivateValueStore, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import CartServices from "../../services/CartServices";
import { Card, CardImage, CardText, CardTextView, IconImage, IconPress, IconsContainer } from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PriceBar, PriceText } from "../../pages/CartScreen/style";
import React from "react";

const FavoriteStatusEmpty = require("../../assets/FavoriteIconEmpty.svg")
const FavoriteStatusFull = require("../../assets/FavoriteIconFull.svg")

interface UserProductCardInfo {
    title: string
    image: string
    ProductUse: string
    price: number
    condition: string
    id: number
    userId: number
}

export default function UserProductCard() {
    
    const [products, setProducts] = useState<UserProductCardInfo[]>();

    useEffect(() => {
        CartServices.getCart(1).then(response => (
            setProducts(response?.data.listaAll)
        ))
    }, [])

    const DeleteProduct = (id:number, idcart:number) => {
        CartServices.deleteCart(idcart, id).then(res => {
        })
    }
    
    const sum = products?.map((product) => product.price)
    const totalPrice = sum?.reduce((total, produto) => total + produto)
    console.log(totalPrice)

    return(
        <>
        {products !== undefined &&
            products?.map((product) => {
            return(
                <Card key={product.id}>
                <CardImage source={{uri:product.image}}></CardImage>
                <CardTextView>
                    <CardText>{product.title}</CardText>
                    <CardText>{product.condition}</CardText>
                    <CardText>R${product.price.toFixed(2)}</CardText>
                </CardTextView>
                <IconsContainer>
                    <IconPress></IconPress>
                    <IconPress onPress={ () => {DeleteProduct(product.id, 1)} }>
                        <IconImage source={require("../../assets/TrashIcon.svg")}/>
                    </IconPress> 
                </IconsContainer>
                </Card>
            );
            })}
            <PriceBar>
                    <PriceText>Total:</PriceText>
                    <PriceText>R${totalPrice?.toFixed(2)}</PriceText>
            </PriceBar>
        </>
    );
}