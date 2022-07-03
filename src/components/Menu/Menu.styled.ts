import styled from '@emotion/styled';

import { maxScreen } from '~/helpers';

const MIN_MENU_WIDTH = '4.25rem';
const MAX_MENU_WIDTH = '16.875rem';

const MenuStyled = styled.nav<{ isOpened: boolean }>`
  position: static;
  width: ${({ isOpened }) => (isOpened ? MAX_MENU_WIDTH : MIN_MENU_WIDTH)};
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
    width: ${({ isOpened }) => (isOpened ? '100%' : 0)};
  }

  @media (${maxScreen.md}) {
    width: ${MAX_MENU_WIDTH};
    transform: ${({ isOpened }) => (isOpened ? '0' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;

    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export default MenuStyled;
