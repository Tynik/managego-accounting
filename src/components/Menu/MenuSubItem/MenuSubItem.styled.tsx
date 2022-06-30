import styled from '@emotion/styled';

export type MenuSubItemStyledProps = {
  isOpened: boolean;
};

const MenuSubItemStyled = styled.div<MenuSubItemStyledProps>`
  margin: 0.625rem 0;

  > *:first-of-type {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.625rem;
    border-radius: 0.5rem;
    cursor: pointer;

    > *:first-child {
      background-color: white;
      margin-right: 0.25rem;
      border-radius: 0.25rem;
    }

    &:hover {
      background-color: #3e7694;
    }

    > h5 {
      opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
      transition: opacity 0.3s linear;
      white-space: nowrap;
    }
  }
`;

export default MenuSubItemStyled;
