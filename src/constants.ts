type PageInfo = {
  title: string;
};

export const PAGES: Record<string, PageInfo> = {
  '/': {
    title: 'Dashboard',
  },
  '/vendors': {
    title: 'Vendors List',
  },
  '/transactions': {
    title: 'Transactions',
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
