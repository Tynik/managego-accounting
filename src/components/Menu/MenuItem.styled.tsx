import styled from '@emotion/styled';

const MenuItemStyled = styled.nav<{ isOpened: boolean; hideIconWhenClosed?: boolean }>`
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: opacity 0.3s linear;

  > *:first-of-type {
    flex-shrink: 0;
    ${({ hideIconWhenClosed, isOpened }) =>
      hideIconWhenClosed &&
      `
        opacity: ${isOpened ? 1 : 0};
      `}
  }

  > *:last-child {
    opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default MenuItemStyled;
