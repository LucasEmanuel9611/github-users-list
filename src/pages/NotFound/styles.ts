import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-family: "Inter";
  font-weight: 700;
  font-size: 48px;
  color: var(--dark-200);
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 24px;
  color: var(--dark-200);
  margin-bottom: 16px;
`;
