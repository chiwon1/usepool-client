import styled from 'styled-components';

export const CreateMenu = styled.aside`
  position: fixed;
  inset: 0px;
  z-index: 50;
  visibility: visible;

  @media (min-width: 800px) {
    inset: 0px auto 0px 50%;
    width: 1280px;
    position: fixed;
    transform: translate(-50%, 0px);
  }
`;
