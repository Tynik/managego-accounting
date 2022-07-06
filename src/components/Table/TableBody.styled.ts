import styled from 'styled-components';

const TableBodyStyled = styled.tbody`
  tr {
    position: relative;

    &:not(:last-of-type):after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0.25rem;
      right: 0.25rem;
      height: 1px;
      background-color: ${({ theme }) => theme.primary.color.border};
    }
  }
`;

export default TableBodyStyled;
