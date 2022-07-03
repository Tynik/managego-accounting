import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type MenuSecondItemStyledProps = {
  isMenuOpened: boolean;
  isSubItemOpened: boolean;
  areWithItems: boolean;
  active?: boolean;
};

const MenuSecondItemStyled = styled.div<MenuSecondItemStyledProps>`
  > .item {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    padding: 0.5rem 0.625rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #e8e8e8;

    &:hover {
      background-color: #ece8ff;
      color: #7b61ff;

      > .arrow svg path {
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
      `};

    > .arrow {
      flex-shrink: 0;
      display: ${({ isMenuOpened }) => (isMenuOpened ? 'inherit' : 'none')};
      visibility: ${({ areWithItems }) => (areWithItems ? 'visible' : 'hidden')};
    }

    > .name {
      display: flex;
      align-items: center;

      > .icon {
        background-color: white;
        margin-right: 0.25rem;
        border-radius: 0.25rem;
      }

      > h5 {
        opacity: ${({ isMenuOpened }) => (isMenuOpened ? 1 : 0)};
        transition: opacity 0.3s linear;
        white-space: nowrap;
        font-size: 0.875rem;
        font-weight: 400;
      }
    }
  }

  > .list {
    flex-direction: column;
    margin-left: 2.25rem;
    display: ${({ isMenuOpened }) => (isMenuOpened ? 'flex' : 'none')};
    opacity: ${({ isSubItemOpened }) => (isSubItemOpened ? 1 : 0)};

    > * {
      cursor: pointer;
      border-radius: 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${({ isSubItemOpened }) => (isSubItemOpened ? '0.875rem' : 0)};
      padding: ${({ isSubItemOpened }) => (isSubItemOpened ? '0.25rem 0.75rem' : 0)};
      margin: ${({ isSubItemOpened }) => (isSubItemOpened ? '0 0 0.25rem 0' : 0)};
      transition: font-size 0.25s, opacity 0.26s ease;
      font-weight: 400;
      color: #e8e8e8;

      &:hover {
        background-color: #ece8ff;
        color: #7b61ff;
      }

      &:active {
        background-color: #cabfff;
      }
    }
  }
`;

export default MenuSecondItemStyled;
