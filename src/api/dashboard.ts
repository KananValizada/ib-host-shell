import { type WidgetKey } from '../widgets';

export type BootstrapResponse = {
  user: {
    id: string;
    name: string;
    role: string;
  };
  widgets: WidgetKey[];
};

export const getDashboardBootstrap = (): Promise<BootstrapResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          name: 'Kenan',
          role: 'user',
        },
        widgets: ['accounts'], // dəyiş → ['accounts', 'cards']
      });
    }, 800); // network delay simulyasiya
  });
};