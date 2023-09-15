import { View } from "react-native";
import { CommentSection, CommentText, CommentTextSection, FirstSection, NameText, ProfileInfo, ProfilePic, RatingBar, RatingStar, TrashBox, TrashIcon } from "./style";

export default function ProductComment() {
    return (
        <CommentSection>
            <FirstSection>
                <ProfileInfo>
                    <ProfilePic></ProfilePic>
                    <NameText>Nome</NameText>
                </ProfileInfo>
                <RatingBar>
                    <RatingStar source={require("../../assets/FullStar.svg")}/>
                    <RatingStar source={require("../../assets/FullStar.svg")}/>
                    <RatingStar source={require("../../assets/FullStar.svg")}/>
                    <RatingStar source={require("../../assets/FullStar.svg")}/>
                    <RatingStar source={require("../../assets/HalfStar.png")}/>
                </RatingBar>
            </FirstSection> 
            <CommentTextSection>
                <CommentText>-------------------------------------------------------------------Comentário---------------------------------------------------------------</CommentText>
            </CommentTextSection>
            <TrashBox>
                <TrashIcon source={require("../../assets/TrashIcon2.svg")}/>
            </TrashBox>
        </CommentSection>
    );
}