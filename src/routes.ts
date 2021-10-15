import { lazy } from 'solid-js';
import { RouteDefinition } from 'solid-app-router';
import PostsData from '~/pages/[...posts].data';
import PostData from '~/pages/posts/[id].data';

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
    path: "/auth",
    component: lazy(() => import('~/pages/Auth')),
  },
  {
    path: "/settings",
    component: lazy(() => import('~/pages/Settings')),
  },
  {
    path: "/posts/:id",
    component: lazy(() => import("./pages/posts/[id]")),
    data: PostData
  },
  {
    path: "/posts",
    component: lazy(() => import('~/pages/[...posts]')),
    data: PostsData
  },
  {
    path: "**",
    component: lazy(() => import('~/pages/NotFound')),
  },
];
