import styled from '@emotion/styled';

export type MenuSubItemStyledProps = {
  isMenuOpened: boolean;
  isSubItemOpened: boolean;
  areWithItems: boolean;
};

const MenuSubItemStyled = styled.div<MenuSubItemStyledProps>`
  .item {
    display: flex;
    align-items: center;
    margin: 0.625rem 0.25rem 0;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: #3e7694;
    }

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
      display: ${({ isMenuOpened }) => (isMenuOpened ? 'inherit' : 'none')};
      visibility: ${({ areWithItems }) => (areWithItems ? 'visible' : 'hidden')};
    }

    > *:nth-of-type(2) {
      display: flex;
      align-items: center;
      padding: 0.5rem ${({ isMenuOpened }) => (isMenuOpened ? '0.625rem' : '0.25rem')};

      > *:first-child {
        background-color: white;
        margin-right: 0.25rem;
        border-radius: 0.25rem;
      }

      > h5 {
        opacity: ${({ isMenuOpened }) => (isMenuOpened ? 1 : 0)};
        transition: opacity 0.3s linear;
        white-space: nowrap;
      }
    }
  }

  .list {
    margin-left: 2.25rem;
    display: ${({ isMenuOpened }) => (isMenuOpened ? 'inherit' : 'none')};
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

      &:hover {
        background-color: #3e7694;
      }
    }
  }
`;

export default MenuSubItemStyled;
