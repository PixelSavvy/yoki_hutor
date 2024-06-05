import { lazy } from 'react';

const Root = lazy(() =>
  import('@/components').then((module) => ({
    default: module.Root,
  })),
);

const Home = lazy(() =>
  import('@/pages').then((module) => ({
    default: module.HomePage,
  })),
);

export const elements = {
  Root,
  Home,
};
