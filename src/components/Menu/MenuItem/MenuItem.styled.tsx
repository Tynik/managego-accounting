import styled from '@emotion/styled';

export type MenuItemStyledProps = {
  isOpened: boolean;
};

const MenuItemStyled = styled.div<MenuItemStyledProps>`
  > *:first-of-type {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    padding: 0.5rem 0.25rem;

    > *:first-of-type {
      flex-shrink: 0;
    }

    &:hover {
      background-color: #3e7694;
    }

    > h4 {
      opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
      transition: opacity 0.3s linear;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export default MenuItemStyled;
