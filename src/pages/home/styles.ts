import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
  display: flex;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 56px;
  gap: 32px;
`;

export const SearchButton = styled(Button)`
  width: 176px;
`;
