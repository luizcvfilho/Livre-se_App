import React from "react";
import HeaderComponent from "../../components/MyProducts/Header";
import ProductCardComponent from "../../components/MyProducts/ProductCard";
import { Screen } from './style'

export default function MyProducts(){
    return(
        <Screen>
            <HeaderComponent/>
            <ProductCardComponent/>
        </Screen>
    )
}