import styled from '@emotion/styled';

const TopBarStyled = styled.div`
  display: flex;
  padding: 1.281rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  align-items: center;
  gap: 1rem;

  > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4a5354;
    flex-grow: 1;
  }
`;

export default TopBarStyled;
