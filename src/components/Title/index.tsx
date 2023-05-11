import * as Styled from "./styles"

export type TitleProps = {
    size: number;
}

export const Title = ({ size }: TitleProps) => (
    <Styled.TitleContainer>
        <Styled.TitleText $color="--blue-100" $size={size}>Search</Styled.TitleText>
        <Styled.TitleText>&nbsp;</Styled.TitleText>
        <Styled.TitleText $color="--purple-100" $size={size}>d_evs</Styled.TitleText>
    </Styled.TitleContainer>
)