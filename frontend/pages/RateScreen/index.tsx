import { View } from "react-native";
import ProductComment from "../../components/ProductComment";
import RateBarsSection from "../../components/RateBarsSection";
import { BackArrow, PageText, RateSection, RateSmallSection, RateSmallSectionText, RateText, RatingBar, RatingStar, Screen, TitlePage } from "./style";

export default function RateScreen() {
    return (
        <Screen>
            <BackArrow source={require("../../assets/Voltar Seta.png")}/>
            <TitlePage>Avaliações</TitlePage>
            <RateSection>
                <RateText>0,0</RateText>
                <RateSmallSection>
                <RatingBar>
                            <RatingStar source={require("../../assets/FullStar.svg")}/>
                            <RatingStar source={require("../../assets/FullStar.svg")}/>
                            <RatingStar source={require("../../assets/FullStar.svg")}/>
                            <RatingStar source={require("../../assets/FullStar.svg")}/>
                            <RatingStar source={require("../../assets/HalfStar.png")}/>
                </RatingBar>
                <RateSmallSectionText>Média entre X avaliações</RateSmallSectionText>
                </RateSmallSection>
            </RateSection>
            <RateBarsSection></RateBarsSection>
            <PageText>X Avaliações</PageText>
            <ProductComment></ProductComment>
            <ProductComment></ProductComment>
            <ProductComment></ProductComment>
            <ProductComment></ProductComment>
        </Screen>
    );
}