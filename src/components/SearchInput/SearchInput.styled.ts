import styled, { css } from 'styled-components';

import { maxScreen } from '~/helpers';

export type SearchInputStyledProps = {
  extendable?: boolean;
};

const SearchInputStyled = styled.div<SearchInputStyledProps>`
  position: relative;

  ${({ extendable }) =>
    extendable &&
    css`
      max-width: 32.25rem;
      transition: all 0.3s ease-in-out;

      &:focus-within {
        flex-grow: 1;
      }
    `}

  > input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.primary.color.border};
    border-radius: 0.25rem;
    padding: 0.5rem 1rem 0.5rem 2rem;
    font-size: 0.875rem;
    color: #4a5354;
    font-weight: 400;
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
