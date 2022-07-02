import styled from '@emotion/styled';

const ActionPanelStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.primary.color.border};
  background-color: ${({ theme }) => theme.primary.color.panel};
  box-shadow: 0 0.25rem 1rem 0 ${({ theme }) => theme.actionPanel.shadowColor};
`;

export default ActionPanelStyled;
