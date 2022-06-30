import styled from '@emotion/styled';

export type TopBarStyledProps = any;

const TopBarStyled = styled.div<TopBarStyledProps>`
  display: flex;
  padding: 1.281rem 1.5rem;
  border-bottom: 1px solid #e8e8e8;
  align-items: center;

  > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4a5354;
    flex-grow: 1;
  }
`;

export default TopBarStyled;
