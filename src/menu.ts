import { type PageKey } from './pages';

export type MenuItem = {
  label: string;
  path: string;
  pageKey: PageKey;
};

export const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    pageKey: 'dashboard',
  },
  {
    label: 'Accounts',
    path: '/accounts',
    pageKey: 'accounts',
  },
  {
    label: 'Cards',
    path: '/cards',
    pageKey: 'cards',
  },
];