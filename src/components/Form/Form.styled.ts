import styled from '@emotion/styled';

const FormStyled = styled.form`
  > h4 {
    font-size: 0.875rem;
    color: #4a5354;
    font-weight: 400;
  }

  > .items {
    display: flex;
    flex-direction: column;

    > * {
      margin-top: 1.75rem;
    }
  }
`;

export default FormStyled;
