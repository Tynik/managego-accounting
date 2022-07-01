type ScreenSize = 'xs' | 'sm' | 'md' | 'lg';

export const BREAKPOINTS: Record<ScreenSize, string> = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const maxScreen: Record<ScreenSize, string> = {
  xs: `max-width: ${BREAKPOINTS.xs}`,
  sm: `max-width: ${BREAKPOINTS.sm}`,
  md: `max-width: ${BREAKPOINTS.md}`,
  lg: `max-width: ${BREAKPOINTS.lg}`,
};
