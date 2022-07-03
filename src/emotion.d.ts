import '@emotion/react';

export type ButtonColor = 'success' | 'info' | 'error' | 'default';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'cancel';

type ButtonModifiers = {
  color: string;
  borderColor?: string;
  backgroundColor?: string;
  hover?: {
    backgroundColor: string;
  };
  active?: {
    backgroundColor: string;
    borderColor?: string;
  };
  disabled?: {
    color: string;
    borderColor?: string;
    backgroundColor?: string;
  };
};

type Button = Record<ButtonVariant, ButtonModifiers>;

type Buttons = Record<ButtonColor, Partial<Button>>;

declare module '@emotion/react' {
  export interface Theme {
    primary: {
      color: {
        primary: string;
        text: string;
        border: string;
        panel: string;
        shadow: string;
      };
    };
    button: Buttons;
    actionPanel: unknown;
  }
}
