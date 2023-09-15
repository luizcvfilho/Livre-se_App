import React from "react";
import AddPhotoComp from "../../components/AddProduct/AddPhotoComp";
import FormComponent from "../../components/AddProduct/FormComponent";
import HeaderComp from "../../components/AddProduct/HeaderComp";
import { Screen, SendBtn } from './style'

export default function AddProduct() {


    return (
        <Screen>
            <HeaderComp />
            <AddPhotoComp />
            <FormComponent />
            <SendBtn>Enviar</SendBtn>
        </Screen>
    )
}
