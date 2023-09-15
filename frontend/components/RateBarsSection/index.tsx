import { RateBar, RateBarsContainer, RateBarsSmallContainer, RateBarsText } from "./style";

            
export default function RateBarsSection() {
    return (
        <RateBarsContainer>
                <RateBarsSmallContainer>
                    <RateBarsText>5 Estrelas</RateBarsText>
                    <RateBar></RateBar>
                    <RateBarsText>X</RateBarsText>
                </RateBarsSmallContainer>
                <RateBarsSmallContainer>
                    <RateBarsText>4 Estrelas</RateBarsText>
                    <RateBar></RateBar>
                    <RateBarsText>X</RateBarsText>
                </RateBarsSmallContainer>
                <RateBarsSmallContainer>
                    <RateBarsText>3 Estrelas</RateBarsText>
                    <RateBar></RateBar>
                    <RateBarsText>X</RateBarsText>
                </RateBarsSmallContainer>
                <RateBarsSmallContainer>
                    <RateBarsText>2 Estrelas</RateBarsText>
                    <RateBar></RateBar>
                    <RateBarsText>X</RateBarsText>
                </RateBarsSmallContainer>
                <RateBarsSmallContainer>
                    <RateBarsText>1 Estrelas</RateBarsText>
                    <RateBar></RateBar>
                    <RateBarsText>X</RateBarsText>
                </RateBarsSmallContainer>
            </RateBarsContainer>
    );
}           
            