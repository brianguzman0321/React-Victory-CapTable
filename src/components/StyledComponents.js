import styled, { css } from 'styled-components';

export const Root = styled.div`
  height: 100vh;

  display: flex;
  background-color: #f4f6fa;
`;

export const Page = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  opacity: 1;

  transition: opacity 600ms;
  transition-timing-function: ease-out;

  padding: 100px;

  ${p =>
    p.isLoading &&
    css`
      opacity: 0.1;
    `}
`;
