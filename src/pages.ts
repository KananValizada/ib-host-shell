import React from 'react';
import DashboardPage from './DashboardPage';

export const pageRegistry = {
  dashboard: DashboardPage,
  accounts: React.lazy(() => import('remote_accounts/AccountsPage')),
  cards: React.lazy(() => import('remote_cards/CardsPage')),
};

export type PageKey = keyof typeof pageRegistry;