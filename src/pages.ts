import React from 'react';
import DashboardPage from './DashboardPage';

export const pageRegistry = {
  dashboard: DashboardPage,
  accounts: React.lazy(() => import('accounts/AccountsPage')),
  cards: React.lazy(() => import('cards/CardsPage')),
};

export type PageKey = keyof typeof pageRegistry;