type PageInfo = {
  title: string;
};

export const PAGES: Record<string, PageInfo> = {
  '/': {
    title: 'Dashboard',
  },
  '/vendors-list': {
    title: 'Vendors List',
  },
  '/banking': {
    title: 'Banking/Accounting',
  },
  '/reports': {
    title: 'Reports',
  },
  '/ledger': {
    title: 'Ledger',
  },
  '/setup': {
    title: 'Setup',
  },
};
