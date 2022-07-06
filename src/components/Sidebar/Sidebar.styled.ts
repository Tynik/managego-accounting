import styled from 'styled-components';
import { maxScreen } from '~/helpers';

export type SidebarStyledProps = {
  isSidebarOpened: boolean;
};

const SidebarStyled = styled.aside<SidebarStyledProps>`
  width: 20rem;
  transform: ${({ isSidebarOpened }) => (isSidebarOpened ? 0 : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f8ff;
  padding: 2.25rem 1.875rem 1rem;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e8e8e8;

  > h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4a5354;
  }

  > .content {
    flex-grow: 1;
    padding: 0.75rem 0.125rem;
    overflow-y: auto;
  }

  @media (${maxScreen.xs}) {
    width: 100%;
  }
`;

export default SidebarStyled;
