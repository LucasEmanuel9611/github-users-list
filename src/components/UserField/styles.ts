import styled from "styled-components";

export const Text = styled.span`
  font-family: "Inter";
  color: var(--gray-300);
  font-weight: 400;
  font-size: 14px;
`;

export const TextLink = styled.a`
  font-family: "Inter";
  color: var(--gray-300);
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;

export const UserFieldInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
