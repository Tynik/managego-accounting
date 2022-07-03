import styled from '@emotion/styled';

import { maxScreen } from '~/helpers';

const SearchStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.primary.color.border};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;

  @media (${maxScreen.sm}) {
    display: none;
  }
`;

export default SearchStyled;
