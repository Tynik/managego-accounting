import styled from '@emotion/styled';

import { minScreen } from '~/helpers';

const TopBarStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.281rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.primary.color.border};
  align-items: center;
  box-shadow: 0 0.25rem 1rem 0 ${({ theme }) => theme.primary.color.shadow};

  > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4a5354;
    flex-grow: 1;
  }

  @media (${minScreen.md}) {
    #burger-btn {
      display: none;
    }
  }
`;

export default TopBarStyled;
