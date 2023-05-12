import styled from "styled-components";

export const Loading = styled.div`
  .spinner {
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: var(--blue-100);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s ease-in-out infinite;
    margin: auto;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
