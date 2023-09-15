import React from "react";
import ChangePasswordModal from "../../components/ProfileEdit/ChangePasswordModal";
import ChangePhoto from "../../components/ProfileEdit/ChangePhoto";
import EditForm from "../../components/ProfileEdit/EditForm";
import HeaderComp from "../../components/ProfileEdit/HeaderComp";
import { ConfirmBtn, ContainerForm, Screen, Teste } from './style'

export default function ProfileEdit() {
    return (
        <Screen>
            <HeaderComp />
            <EditForm />
        </Screen>
    )
}