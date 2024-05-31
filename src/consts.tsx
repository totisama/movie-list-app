import { HomeIcon, ListIcon } from './icons'

export const SIDE_MENU_ITEMS = [
  {
    value: 'Home',
    href: '/',
    icon: () => {
      return <HomeIcon />
    },
    alt: 'Home Icon',
  },
  {
    value: 'Lists',
    href: '/lists',
    icon: () => {
      return <ListIcon />
    },
    alt: 'Lists Icon',
  },
]
