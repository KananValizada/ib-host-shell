export type RemoteKey = 'accounts' | 'cards';

export type RemoteApp = {
  id: string;
  title: string;
  routePath: string;
  remoteKey: RemoteKey;
  module: string;
  enabled: boolean;
};

export const remoteRegistry: RemoteApp[] = [
  {
    id: 'accounts',
    title: 'Accounts',
    routePath: '/accounts',
    remoteKey: 'accounts',
    module: './AccountsPage',
    enabled: true,
  },
  {
    id: 'cards',
    title: 'Cards',
    routePath: '/cards',
    remoteKey: 'cards',
    module: './CardsPage',
    enabled: true,
  },
];