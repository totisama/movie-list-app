import { LogoIcon } from '@/icons'
import { SIDE_MENU_ITEMS } from '@/consts'
import { AsideItem } from './aside-item'

export default function AsideMenu() {
  return (
    <nav className='flex flex-col flex-1 gap-2'>
      <div className='bg-[#121212] rounded-lg p-1'>
        <div className='mt-2 mb-4 ml-3'>
          <LogoIcon />
        </div>
        <ul className='space-y-1'>
          {SIDE_MENU_ITEMS.map((item, index) => (
            <AsideItem
              href={item.href}
              key={index}
            >
              {item.icon()}
              {item.value}
            </AsideItem>
          ))}
        </ul>
      </div>
      <div className='bg-[#121212] rounded-lg p-2 flex-1'>
        <h2 className='ml-2 text-base text-[#9A9A9A]'>My Lists</h2>
        <ul></ul>
      </div>
    </nav>
  )
}
