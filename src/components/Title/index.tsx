import * as Styled from "./styles"

export type TitleProps = {
    size: number;
}

export const Title = ({ size }: TitleProps) => (
    <Styled.TitleContainer>
        <Styled.TitleText $color="#0069CA" $size={size}>Search</Styled.TitleText>
        <Styled.TitleText>&nbsp;</Styled.TitleText>
        <Styled.TitleText $color="#8C19D2" $size={size}>d_evs</Styled.TitleText>
    </Styled.TitleContainer>
)