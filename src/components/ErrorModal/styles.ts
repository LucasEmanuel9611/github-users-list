import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-300);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 8px;
  width: 400px;
  height: 200px;
  overflow: auto;
  padding: 20px;
  gap: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalCloseButton = styled.button`
  border: none;
  background-color: transparent;
  color: var(--gray-300);
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: var(--dark-200);
  }
`;

export const ModalTitle = styled.span`
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  color: var(--dark-200);
  text-decoration: none;
`;

export const Description = styled.span`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  color: var(--dark-100);
  text-decoration: none;
`;

export const ModalContent = styled.div`
  margin-top: 10px;
`;
