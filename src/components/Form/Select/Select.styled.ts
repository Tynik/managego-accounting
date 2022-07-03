import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

export type SelectStyledProps = {
  isOpened: boolean;
  fullWidth?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const SelectStyled = styled.div<SelectStyledProps>`
  display: flex;
  align-items: center;
  position: relative;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : '12.5rem')};
  height: 1.5rem;

  border-bottom: 1px solid #e8e8e8;

  font-size: 0.875rem;
  font-weight: 400;
  color: #939598;

  > .placeholder {
    padding: 0 0.625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
    cursor: pointer;
  }

  > .arrow svg path {
    fill: #939598;
  }

  > input {
    display: none;
  }

  > .dropdown {
    position: absolute;
    z-index: 999;

    width: inherit;
    max-height: 12.5rem;

    display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
    padding: 0.75rem 0.5rem;

    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.12);
    background-color: #fff;

    > .action {
      padding: 0 0.625rem;

      font-size: 0.875rem;
      font-weight: 400;
      color: #5b5959;
    }

    > .divider {
      margin-top: 0.625rem;
      border-bottom: 1px solid #e8e8e8;
    }

    > .search {
      margin-top: 0.625rem;
    }

    > .options {
      margin-top: 0.625rem;
      overflow: auto;

      > * {
        padding: 0.313rem 0.5rem;
      }

      > .option {
        cursor: pointer;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &:hover {
          background-color: #c9eae2;
        }
      }
    }
  }
`;

export default SelectStyled;
