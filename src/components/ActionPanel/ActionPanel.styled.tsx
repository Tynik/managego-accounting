import styled from '@emotion/styled';

const ActionPanelStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.panel};
`;

export default ActionPanelStyled;
