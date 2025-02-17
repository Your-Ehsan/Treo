/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsSettingsImport } from './routes/settings/_settings'
import { Route as homeHomeImport } from './routes/(home)/_home'
import { Route as homeHomeIndexImport } from './routes/(home)/_home.index'
import { Route as SettingsSettingsProfileImport } from './routes/settings/_settings.profile'
import { Route as SettingsSettingsNotificationsImport } from './routes/settings/_settings.notifications'
import { Route as SettingsSettingsDisplayImport } from './routes/settings/_settings.display'
import { Route as SettingsSettingsAppearanceImport } from './routes/settings/_settings.appearance'
import { Route as SettingsSettingsAccountImport } from './routes/settings/_settings.account'
import { Route as homeHomeNoteIdImport } from './routes/(home)/_home.$noteId'

// Create Virtual Routes

const SettingsImport = createFileRoute('/settings')()
const homeImport = createFileRoute('/(home)')()

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute
} as any)

const homeRoute = homeImport.update({
  id: '/(home)',
  getParentRoute: () => rootRoute
} as any)

const SettingsSettingsRoute = SettingsSettingsImport.update({
  id: '/_settings',
  getParentRoute: () => SettingsRoute
} as any)

const homeHomeRoute = homeHomeImport.update({
  id: '/_home',
  getParentRoute: () => homeRoute
} as any)

const homeHomeIndexRoute = homeHomeIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => homeHomeRoute
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

const homeHomeNoteIdRoute = homeHomeNoteIdImport.update({
  id: '/$noteId',
  path: '/$noteId',
  getParentRoute: () => homeHomeRoute
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(home)': {
      id: '/(home)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof homeImport
      parentRoute: typeof rootRoute
    }
    '/(home)/_home': {
      id: '/(home)/_home'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof homeHomeImport
      parentRoute: typeof homeRoute
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
    '/(home)/_home/$noteId': {
      id: '/(home)/_home/$noteId'
      path: '/$noteId'
      fullPath: '/$noteId'
      preLoaderRoute: typeof homeHomeNoteIdImport
      parentRoute: typeof homeHomeImport
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
    '/(home)/_home/': {
      id: '/(home)/_home/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof homeHomeIndexImport
      parentRoute: typeof homeHomeImport
    }
  }
}

// Create and export the route tree

interface homeHomeRouteChildren {
  homeHomeNoteIdRoute: typeof homeHomeNoteIdRoute
  homeHomeIndexRoute: typeof homeHomeIndexRoute
}

const homeHomeRouteChildren: homeHomeRouteChildren = {
  homeHomeNoteIdRoute: homeHomeNoteIdRoute,
  homeHomeIndexRoute: homeHomeIndexRoute
}

const homeHomeRouteWithChildren = homeHomeRoute._addFileChildren(homeHomeRouteChildren)

interface homeRouteChildren {
  homeHomeRoute: typeof homeHomeRouteWithChildren
}

const homeRouteChildren: homeRouteChildren = {
  homeHomeRoute: homeHomeRouteWithChildren
}

const homeRouteWithChildren = homeRoute._addFileChildren(homeRouteChildren)

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
  '/': typeof homeHomeIndexRoute
  '/settings': typeof SettingsSettingsRouteWithChildren
  '/$noteId': typeof homeHomeNoteIdRoute
  '/settings/account': typeof SettingsSettingsAccountRoute
  '/settings/appearance': typeof SettingsSettingsAppearanceRoute
  '/settings/display': typeof SettingsSettingsDisplayRoute
  '/settings/notifications': typeof SettingsSettingsNotificationsRoute
  '/settings/profile': typeof SettingsSettingsProfileRoute
}

export interface FileRoutesByTo {
  '/settings': typeof SettingsSettingsRouteWithChildren
  '/$noteId': typeof homeHomeNoteIdRoute
  '/settings/account': typeof SettingsSettingsAccountRoute
  '/settings/appearance': typeof SettingsSettingsAppearanceRoute
  '/settings/display': typeof SettingsSettingsDisplayRoute
  '/settings/notifications': typeof SettingsSettingsNotificationsRoute
  '/settings/profile': typeof SettingsSettingsProfileRoute
  '/': typeof homeHomeIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(home)': typeof homeRouteWithChildren
  '/(home)/_home': typeof homeHomeRouteWithChildren
  '/settings': typeof SettingsRouteWithChildren
  '/settings/_settings': typeof SettingsSettingsRouteWithChildren
  '/(home)/_home/$noteId': typeof homeHomeNoteIdRoute
  '/settings/_settings/account': typeof SettingsSettingsAccountRoute
  '/settings/_settings/appearance': typeof SettingsSettingsAppearanceRoute
  '/settings/_settings/display': typeof SettingsSettingsDisplayRoute
  '/settings/_settings/notifications': typeof SettingsSettingsNotificationsRoute
  '/settings/_settings/profile': typeof SettingsSettingsProfileRoute
  '/(home)/_home/': typeof homeHomeIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/settings'
    | '/$noteId'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/settings/profile'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/settings'
    | '/$noteId'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/settings/profile'
    | '/'
  id:
    | '__root__'
    | '/(home)'
    | '/(home)/_home'
    | '/settings'
    | '/settings/_settings'
    | '/(home)/_home/$noteId'
    | '/settings/_settings/account'
    | '/settings/_settings/appearance'
    | '/settings/_settings/display'
    | '/settings/_settings/notifications'
    | '/settings/_settings/profile'
    | '/(home)/_home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  homeRoute: typeof homeRouteWithChildren
  SettingsRoute: typeof SettingsRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  homeRoute: homeRouteWithChildren,
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
        "/(home)",
        "/settings"
      ]
    },
    "/(home)": {
      "filePath": "(home)",
      "children": [
        "/(home)/_home"
      ]
    },
    "/(home)/_home": {
      "filePath": "(home)/_home.tsx",
      "parent": "/(home)",
      "children": [
        "/(home)/_home/$noteId",
        "/(home)/_home/"
      ]
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
    "/(home)/_home/$noteId": {
      "filePath": "(home)/_home.$noteId.tsx",
      "parent": "/(home)/_home"
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
    },
    "/(home)/_home/": {
      "filePath": "(home)/_home.index.tsx",
      "parent": "/(home)/_home"
    }
  }
}
ROUTE_MANIFEST_END */
