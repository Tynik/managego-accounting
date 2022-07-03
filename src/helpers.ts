type ScreenSize = 'xs' | 'sm' | 'md' | 'lg';

export const BREAKPOINTS: Record<ScreenSize, string> = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const minScreen: Record<ScreenSize, string> = {
  xs: `min-width: ${BREAKPOINTS.xs}`,
  sm: `min-width: ${BREAKPOINTS.sm}`,
  md: `min-width: ${BREAKPOINTS.md}`,
  lg: `min-width: ${BREAKPOINTS.lg}`,
};

export const maxScreen: Record<ScreenSize, string> = {
  xs: `max-width: ${BREAKPOINTS.xs}`,
  sm: `max-width: ${BREAKPOINTS.sm}`,
  md: `max-width: ${BREAKPOINTS.md}`,
  lg: `max-width: ${BREAKPOINTS.lg}`,
};
