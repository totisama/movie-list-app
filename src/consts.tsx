import { HomeIcon, ListIcon } from './icons'

export const MY_EMAIL_KEY = 'rodrigosamayoam@icloud.com'

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
