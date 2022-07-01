import '@emotion/react';

type ButtonVariant = 'filled' | 'outlined';

type ButtonModifiers = {
  color: string;
  borderColor?: string;
  backgroundColor: string;
  hover: {
    backgroundColor: string;
  };
  active: {
    backgroundColor: string;
  };
  disabled: {
    color: string;
    borderColor?: string;
    backgroundColor: string;
  };
};

type Button = Record<ButtonVariant, ButtonModifiers>;

declare module '@emotion/react' {
  export interface Theme {
    primary: {
      color: {
        primary: string;
        text: string;
        border: string;
        panel: string;
      };
      button: Button;
    };
    secondary: {
      button: Button;
    };
  }
}
