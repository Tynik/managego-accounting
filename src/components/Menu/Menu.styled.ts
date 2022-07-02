import styled from '@emotion/styled';

import { maxScreen } from '~/helpers';

const MAX_MENU_WIDTH = '16.875rem';

const MenuStyled = styled.nav<{ isOpened: boolean }>`
  height: 100vh;
  width: ${({ isOpened }) => (isOpened ? MAX_MENU_WIDTH : 'calc(0.5rem + 0.75rem * 2 + 2.25rem)')};
  background: ${({ theme }) => theme.primary.color.primary};
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  > :not(footer) {
    padding: ${({ isOpened }) => `1rem ${isOpened ? '1.25rem' : '0.75rem'}`};

    &:nth-of-type(n + 2) {
      padding-top: 0;
    }
  }

  @media (${maxScreen.xs}) {
    transform: ${({ isOpened }) => (isOpened ? '0' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
  }
`;

export default MenuStyled;
