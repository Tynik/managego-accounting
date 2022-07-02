import styled from '@emotion/styled';

export const SIDEBAR_BAR_WIDTH = '20rem';

export type SidebarStyledProps = {
  isSidebarOpened: boolean;
};

const SidebarStyled = styled.aside<SidebarStyledProps>`
  width: ${SIDEBAR_BAR_WIDTH};
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

  > h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4a5354;
  }

  > .content {
    flex-grow: 1;
  }
`;

export default SidebarStyled;
