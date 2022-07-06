import styled from 'styled-components';

const TableHeadStyled = styled.thead`
  font-size: 0.875rem;
  color: #5b5959;
  font-weight: 500;

  > tr > th {
    padding: 0.625rem;
    background-color: #f6f4ff;

    &:not(:last-of-type) {
      border-right: 1px solid ${({ theme }) => theme.primary.color.border};
    }
  }
`;

export default TableHeadStyled;
