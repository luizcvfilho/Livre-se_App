import React from "react";
import { AddPhoto, Profile } from "./style";

export default function AddPht(){
    return(
        <AddPhoto><Profile source={require('../../assets/Perfil.png')} />Adicionar Foto de perfil</AddPhoto>
    )
}