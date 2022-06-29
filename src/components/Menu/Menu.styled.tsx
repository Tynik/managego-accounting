import styled from '@emotion/styled';

const MenuStyled = styled.nav<{ open: boolean }>`
  height: 100vh;
  padding: ${({ open }) => `1rem ${open ? '1.219rem' : '0.75rem'}`};
  width: ${({ open }) => (open ? '270px' : 'calc(0.75rem * 2 + 36px)')};
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.primary};
  transition: width 0.3s ease-in-out;
`;

export default MenuStyled;
