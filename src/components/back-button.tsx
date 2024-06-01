import Link from 'next/link'

export const BackButton = () => {
  return (
    <Link
      className='block max-w-[60px] bg-gray-700 py-1 px-2 text-center rounded-3xl transition-all duration-400 ease-in-out hover:bg-gray-800 hover:scale-110'
      href='/'
    >
      Back
    </Link>
  )
}
