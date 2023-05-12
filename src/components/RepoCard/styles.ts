import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  border-color: var(--gray-100);
  width: 100%;
  gap: 16px;
  padding-bottom: 24px;
`;

export const Title = styled.a`
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  color: var(--dark-200);
  text-decoration: none;
`;

export const Description = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  color: var(--gray-300);
`;

export const StarsAndDateContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

// export const StarContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
// `;
