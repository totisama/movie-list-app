import { HomeIcon, ListIcon } from './icons'

export const MY_EMAIL_KEY = 'rodrigosamayoam@icloud.com'

export const SIDE_MENU_ITEMS = [
  {
    value: 'Movies',
    href: '/',
    icon: () => {
      return <HomeIcon />
    },
    alt: 'Home Icon',
  },
  {
    value: 'My lists',
    href: '/my-lists',
    icon: () => {
      return <ListIcon />
    },
    alt: 'Lists Icon',
  },
]
