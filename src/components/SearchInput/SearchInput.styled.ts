import styled from '@emotion/styled';

import { maxScreen } from '~/helpers';

const SearchInputStyled = styled.div`
  position: relative;

  > input {
    border: 1px solid ${({ theme }) => theme.primary.color.border};
    border-radius: 0.25rem;
    padding: 0.5rem 1rem 0.5rem 2rem;
    font-size: 0.875rem;
    color: #4a5354;
    font-weight: 400;

    width: 11.5rem;
    transition: width 0.3s ease-in-out;

    &:focus {
      width: 25rem;
    }
  }

  > .icon {
    position: absolute;
    height: 100%;
    left: 0.5rem;
    cursor: pointer;

    &:hover svg path {
      fill: #e8e8e8;
    }
  }

  @media (${maxScreen.sm}) {
    display: none;
  }
`;

export default SearchInputStyled;
