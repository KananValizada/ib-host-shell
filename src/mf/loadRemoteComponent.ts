import React from 'react';
import type { RemoteKey } from './registry';

// burada mapping saxlayırıq
const remoteImportMap: Record<RemoteKey, () => Promise<any>> = {
  accounts: () => import('accounts/AccountsPage'),
  cards: () => import('cards/CardsPage'),
};

export function loadRemoteComponent(remoteKey: RemoteKey) {
  const importer = remoteImportMap[remoteKey];

  if (!importer) {
    throw new Error(`Remote "${remoteKey}" not found in import map`);
  }

  return React.lazy(importer);
}