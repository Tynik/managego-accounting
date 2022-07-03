import styled from '@emotion/styled';

export type MenuTitleStyledProps = {
  isOpened: boolean;
};

const MenuTitleStyled = styled.div<MenuTitleStyledProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 0.5rem;

  > .icon {
    flex-shrink: 0;
    margin-left: 0.625rem;
    display: ${({ isOpened }) => (isOpened ? 'inherit' : 'none')};
    cursor: pointer;

    &:hover {
      background-color: #3e7694;
      border-radius: 1.5rem;

      svg path {
        fill: #5ea3a3;
      }
    }
  }

  > .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    flex-grow: 1;

    > h4 {
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: 600;
      font-size: 1.125rem;
      color: #fff;
      opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
      transition: opacity 0.3s linear;
      margin-left: ${({ isOpened }) => (isOpened ? '0.5rem' : 0)};
    }
  }
`;

export default MenuTitleStyled;
