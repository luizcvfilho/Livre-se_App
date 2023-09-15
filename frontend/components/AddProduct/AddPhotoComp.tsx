import React from "react";
import { AddPhotoBox, AddPhotoArea, PhotoIcon, AddPhotoText } from "./style";


export default function AddPhotoComp() {
    return (
        <AddPhotoBox>
            <AddPhotoArea>
                <PhotoIcon source={require('../../assets/icone foto.png')} />
                <AddPhotoText>Adicione Fotos do Produto</AddPhotoText>
            </AddPhotoArea>
        </AddPhotoBox>
    )
}