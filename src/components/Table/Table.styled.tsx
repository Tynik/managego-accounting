import styled from '@emotion/styled';

const TableStyled = styled.table`
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.primary.color.border};
  border-radius: 0.125rem;
  border-spacing: 0;
  border-collapse: separate;
`;

export default TableStyled;
