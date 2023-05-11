import styled from "styled-components";

type TitleTextProps = {
  $color?: string;
  $size?: number;
};

export const TitleText = styled.h1<TitleTextProps>`
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  font-size: ${({ $size }) => $size}px;
  margin: 0;
  color: var(${({ $color }) => $color});
`;

export const TitleContainer = styled.span`
  display: flex;
  margin: 0;
`;
