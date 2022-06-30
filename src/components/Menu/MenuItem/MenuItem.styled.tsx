import styled from '@emotion/styled';

export type MenuItemStyledProps = {
  isMenuOpened: boolean;
};

const MenuItemStyled = styled.div<MenuItemStyledProps>`
  > .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 0.5rem;
    padding: 0.5rem 0.25rem;

    &:hover {
      background-color: #3e7694;
    }

    > .icon {
      flex-shrink: 0;
    }

    > h4 {
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
