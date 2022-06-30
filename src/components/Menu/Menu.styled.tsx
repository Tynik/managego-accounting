import styled from '@emotion/styled';

const MenuStyled = styled.nav<{ isOpened: boolean }>`
  height: 100vh;
  padding: ${({ isOpened }) => `1rem ${isOpened ? '1.25rem' : '0.75rem'}`};
  width: ${({ isOpened }) => (isOpened ? '16.875rem' : 'calc(0.5rem + 0.75rem * 2 + 2.25rem)')};
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.primary};
  transition: width 0.3s ease-in-out;
`;

export default MenuStyled;
