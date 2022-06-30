import styled from '@emotion/styled';

const TableBodyStyled = styled.tbody`
  tr {
    position: relative;

    &:not(:last-child):after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0.25rem;
      right: 0.25rem;
      height: 1px;
      background-color: ${({ theme }) => theme.color.border};
    }
  }
`;

export default TableBodyStyled;
