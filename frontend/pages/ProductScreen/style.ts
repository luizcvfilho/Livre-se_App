import styled from 'styled-components/native'


export const BackButton = styled.TouchableOpacity`
left: 18px;
`


export const BackArrow = styled.Image`
    width: 28px;
    height: 26px;
`

export const FavButton = styled.TouchableOpacity`
 right: 18px;
 width: 28px;
 height: 26px;
    
`
export const FavIcon = styled.Image`
    width: 28px;
    height: 26px;
    position: absolute;
`

export const Screen = styled.View`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
`

export const SectionBar = styled.View`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #8EC3B0;
    height: 40px;
    margin-top: 36px;
`

export const SectionImage = styled.View`
    background-color: #4C8996;
    width: 100%;
    height: 209px;
    align-items: center;
`

export const ProductImage = styled.Image`
    height: 208px;
    width: 208px;
`

export const PriceSection = styled.View`
    height: 190px;
    width: 100%;
    background-color: white;
    justify-content: space-between;
    display: flex;
    align-items: center;
`

export const ProductName = styled.Text`
    font-size: 22px;
    color: black;
    line-height: 27px;
    font-style: normal;
    margin-top:8px;
    width: 100%;
    margin-left: 8px;
`

export const ProductPrice = styled.Text`
    font-size: 32px;
    color: #4C8996;
    line-height: 39px;
    align-items: center;
    text-align: center;
`

export const CartButton = styled.TouchableOpacity`
    width: 287px;
    height: 57px;
    background-color: #8EC3B0;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
`

export const CartButtonText = styled.Text`
    font-size: 16px;
    color: white;
`

export const DescriptionSection = styled.View`
    height: 160px;
    width: 100%;
    align-items: center;
    padding-top: 35px;
    justify-content: space-between;
`
export const DivBar = styled.View`
    width: 342px;
    height: 1px;
    background-color: #9F9F9F;
`
export const DescriptionTitle = styled.Text`
    font-size: 18px;
    position: absolute;
`

export const DescriptionText = styled.Text`
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
`

export const DetailsSection = styled.View`
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const DetailInfoBar = styled.View`
    height: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const DetailInfoText = styled.Text`
    font-size: 16px;
    margin-left: 30px;
    position: absolute;
`

export const DetailInfoType = styled.Text`
    font-size: 16px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
`

export const RatingSection = styled.View`
    height: 80px;
    background-color: white;
    width: 100%;
    align-items: center;
`

export const RatingSmallSection = styled.View`
    margin-top: 10px;
    height: 50px;
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RatingBar = styled.View`
    width: 85px;
    height: 17px;
    display: flex;
    flex-direction: row;
`

export const RatingStar = styled.Image`
    height: 16px;
    width: 17px;
`

export const RatingText = styled.Text`
    font-size: 16px;
`