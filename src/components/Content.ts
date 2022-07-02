import styled from '@emotion/styled';

export type ContentProps = {
  width?: string;
};

const Content = styled.section<ContentProps>`
  padding: 2rem 1.5rem;
  overflow: auto;
  height: 100%;
  width: ${({ width }) => width};
  transition: width 0.3s ease-in-out;
`;

export default Content;
