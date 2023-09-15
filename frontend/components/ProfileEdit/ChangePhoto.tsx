import React from "react";
import { ChangePhtText, ChangeProfilePht, UserPht } from "./style";


export default function ChangePhoto(){
    return(
        <ChangeProfilePht>
            <UserPht/>
            <ChangePhtText>Trocar Foto</ChangePhtText>
        </ChangeProfilePht>
    )
}