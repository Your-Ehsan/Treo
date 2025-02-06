/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SettingsSettingsImport } from './routes/settings/_settings'
import { Route as SettingsSettingsProfileImport } from './routes/settings/_settings.profile'
import { Route as SettingsSettingsNotificationsImport } from './routes/settings/_settings.notifications'
import { Route as SettingsSettingsDisplayImport } from './routes/settings/_settings.display'
import { Route as SettingsSettingsAppearanceImport } from './routes/settings/_settings.appearance'
import { Route as SettingsSettingsAccountImport } from './routes/settings/_settings.account'

// Create Virtual Routes

const SettingsImport = createFileRoute('/settings')()

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute
} as any)

const SettingsSettingsRoute = SettingsSettingsImport.update({
  id: '/_settings',
  getParentRoute: () => SettingsRoute
} as any)

const SettingsSettingsProfileRoute = SettingsSettingsProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => SettingsSettingsRoute
} as any)

const SettingsSettingsNotificationsRoute = SettingsSettingsNotificationsImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => SettingsSettingsRoute
} as any)

const SettingsSettingsDisplayRoute = SettingsSettingsDisplayImport.update({
  id: '/display',
  path: '/display',
  getParentRoute: () => SettingsSettingsRoute
} as any)

const SettingsSettingsAppearanceRoute = SettingsSettingsAppearanceImport.update({
  id: '/appearance',
  path: '/appearance',
  getParentRoute: () => SettingsSettingsRoute
} as any)

const SettingsSettingsAccountRoute = SettingsSettingsAccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => SettingsSettingsRoute
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/settings/_settings': {
      id: '/settings/_settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsSettingsImport
      parentRoute: typeof SettingsRoute
    }
    '/settings/_settings/account': {
      id: '/settings/_settings/account'
      path: '/account'
      fullPath: '/settings/account'
      preLoaderRoute: typeof SettingsSettingsAccountImport
      parentRoute: typeof SettingsSettingsImport
    }
    '/settings/_settings/appearance': {
      id: '/settings/_settings/appearance'
      path: '/appearance'
      fullPath: '/settings/appearance'
      preLoaderRoute: typeof SettingsSettingsAppearanceImport
      parentRoute: typeof SettingsSettingsImport
    }
    '/settings/_settings/display': {
      id: '/settings/_settings/display'
      path: '/display'
      fullPath: '/settings/display'
      preLoaderRoute: typeof SettingsSettingsDisplayImport
      parentRoute: typeof SettingsSettingsImport
    }
    '/settings/_settings/notifications': {
      id: '/settings/_settings/notifications'
      path: '/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof SettingsSettingsNotificationsImport
      parentRoute: typeof SettingsSettingsImport
    }
    '/settings/_settings/profile': {
      id: '/settings/_settings/profile'
      path: '/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof SettingsSettingsProfileImport
      parentRoute: typeof SettingsSettingsImport
    }
  }
}

// Create and export the route tree

interface SettingsSettingsRouteChildren {
  SettingsSettingsAccountRoute: typeof SettingsSettingsAccountRoute
  SettingsSettingsAppearanceRoute: typeof SettingsSettingsAppearanceRoute
  SettingsSettingsDisplayRoute: typeof SettingsSettingsDisplayRoute
  SettingsSettingsNotificationsRoute: typeof SettingsSettingsNotificationsRoute
  SettingsSettingsProfileRoute: typeof SettingsSettingsProfileRoute
}

const SettingsSettingsRouteChildren: SettingsSettingsRouteChildren = {
  SettingsSettingsAccountRoute: SettingsSettingsAccountRoute,
  SettingsSettingsAppearanceRoute: SettingsSettingsAppearanceRoute,
  SettingsSettingsDisplayRoute: SettingsSettingsDisplayRoute,
  SettingsSettingsNotificationsRoute: SettingsSettingsNotificationsRoute,
  SettingsSettingsProfileRoute: SettingsSettingsProfileRoute
}

const SettingsSettingsRouteWithChildren = SettingsSettingsRoute._addFileChildren(
  SettingsSettingsRouteChildren
)

interface SettingsRouteChildren {
  SettingsSettingsRoute: typeof SettingsSettingsRouteWithChildren
}

const SettingsRouteChildren: SettingsRouteChildren = {
  SettingsSettingsRoute: SettingsSettingsRouteWithChildren
}

const SettingsRouteWithChildren = SettingsRoute._addFileChildren(SettingsRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/settings': typeof SettingsSettingsRouteWithChildren
  '/settings/account': typeof SettingsSettingsAccountRoute
  '/settings/appearance': typeof SettingsSettingsAppearanceRoute
  '/settings/display': typeof SettingsSettingsDisplayRoute
  '/settings/notifications': typeof SettingsSettingsNotificationsRoute
  '/settings/profile': typeof SettingsSettingsProfileRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/settings': typeof SettingsSettingsRouteWithChildren
  '/settings/account': typeof SettingsSettingsAccountRoute
  '/settings/appearance': typeof SettingsSettingsAppearanceRoute
  '/settings/display': typeof SettingsSettingsDisplayRoute
  '/settings/notifications': typeof SettingsSettingsNotificationsRoute
  '/settings/profile': typeof SettingsSettingsProfileRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/settings': typeof SettingsRouteWithChildren
  '/settings/_settings': typeof SettingsSettingsRouteWithChildren
  '/settings/_settings/account': typeof SettingsSettingsAccountRoute
  '/settings/_settings/appearance': typeof SettingsSettingsAppearanceRoute
  '/settings/_settings/display': typeof SettingsSettingsDisplayRoute
  '/settings/_settings/notifications': typeof SettingsSettingsNotificationsRoute
  '/settings/_settings/profile': typeof SettingsSettingsProfileRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/settings'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/settings/profile'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/settings'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/settings/profile'
  id:
    | '__root__'
    | '/'
    | '/settings'
    | '/settings/_settings'
    | '/settings/_settings/account'
    | '/settings/_settings/appearance'
    | '/settings/_settings/display'
    | '/settings/_settings/notifications'
    | '/settings/_settings/profile'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SettingsRoute: typeof SettingsRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SettingsRoute: SettingsRouteWithChildren
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/settings"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/settings": {
      "filePath": "settings",
      "children": [
        "/settings/_settings"
      ]
    },
    "/settings/_settings": {
      "filePath": "settings/_settings.tsx",
      "parent": "/settings",
      "children": [
        "/settings/_settings/account",
        "/settings/_settings/appearance",
        "/settings/_settings/display",
        "/settings/_settings/notifications",
        "/settings/_settings/profile"
      ]
    },
    "/settings/_settings/account": {
      "filePath": "settings/_settings.account.tsx",
      "parent": "/settings/_settings"
    },
    "/settings/_settings/appearance": {
      "filePath": "settings/_settings.appearance.tsx",
      "parent": "/settings/_settings"
    },
    "/settings/_settings/display": {
      "filePath": "settings/_settings.display.tsx",
      "parent": "/settings/_settings"
    },
    "/settings/_settings/notifications": {
      "filePath": "settings/_settings.notifications.tsx",
      "parent": "/settings/_settings"
    },
    "/settings/_settings/profile": {
      "filePath": "settings/_settings.profile.tsx",
      "parent": "/settings/_settings"
    }
  }
}
ROUTE_MANIFEST_END */
