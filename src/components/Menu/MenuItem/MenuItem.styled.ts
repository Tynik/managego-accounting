import styled, { css } from 'styled-components';

export type MenuItemStyledProps = {
  isMenuOpened: boolean;
  active?: boolean;
};

const MenuItemStyled = styled.div<MenuItemStyledProps>`
  > .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 0.5rem;
    padding: 0.5rem 0.625rem;
    color: #add2c9;
    background-color: #3e7694;

    &:hover {
      color: #7b61ff;
      background-color: #ece8ff;

      > .icon svg path {
        fill: #7b61ff;
      }
    }

    &:active {
      background-color: #cabfff;
    }

    ${({ active }) =>
      active &&
      css`
        color: #7b61ff;
        background-color: #cabfff;

        > .icon svg path {
          fill: #7b61ff !important;
        }
      `};

    > .icon {
      flex-shrink: 0;

      svg path {
        fill: #add2c9;
      }
    }

    > h4 {
      font-weight: 600;
      font-size: 1rem;
      display: ${({ isMenuOpened }) => (isMenuOpened ? 'inherit' : 'none')};
      transition: opacity 0.3s linear;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-left: 0.5rem;
    }
  }
`;

export default MenuItemStyled;
