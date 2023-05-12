import styled from "styled-components";

type SearchBarContainerProps = {
  $borderColor: string;
};

export const SearchBarContainer = styled.div<SearchBarContainerProps>`
  display: flex;
  padding: 0 16px;
  align-items: center;
  width: 592px;
  height: 48px;
  border: 1px solid var(${({ $borderColor }) => $borderColor});
  border-radius: 6px;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
  font-family: "Nunito", sans-serif;
  font-family: 400;
  font-size: 18px;
  margin-left: 10px;
`;
