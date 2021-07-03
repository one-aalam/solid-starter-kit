import { lazy } from 'solid-js';
import { RouteDefinition } from 'solid-app-router';

import HomePage from '~/pages/Home';

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/profile",
    component: lazy(() => import('~/pages/Profile')),
  },
  {
    path: "/settings",
    component: lazy(() => import('~/pages/Settings')),
  },
  {
    path: "**",
    component: lazy(() => import('~/pages/NotFound')),
  },
];
