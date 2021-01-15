import {Apps, HomePage, Layer, Logout, Messages, Settings} from "../components/icons";


export const THEME = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark'
}

export const PAGES = {
  apps: {
    path: '/',
    name: 'Apps',
    icon:<Apps />
  },
  about: {
    path: '/layer',
    name: 'Layer',
    icon:<Layer/>
  },
  home: {
    path: '/home',
    name: 'Home',
    icon:<HomePage/>
  },
  messages: {
    path: '/messages',
    name: 'Messages',
    icon:<Messages/>
  },
  settings: {
    path: '/settings',
    name: 'Settings',
    icon:<Settings/>
  },
  logout: {
    path: '/logout',
    name: 'Logout',
    icon:<Logout/>
  },
}
