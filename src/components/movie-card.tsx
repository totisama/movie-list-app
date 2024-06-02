import { type ImdbMovie } from '@/types'
import Link from 'next/link'
import { CustomImage } from './custom-image'
import { CardAnimation } from './card-animation'

interface MovieCardProps {
  movie: ImdbMovie
  index: number
}

export const MovieCard = ({ movie, index }: MovieCardProps) => {
  const { name, image_url: image, year, rating, imdb_url: imdbUrl } = movie
  const id = imdbUrl.split('/')[2]
  const href = `/movie/${id}`

  return (
    <CardAnimation>
      <Link
        className='py-3 max-w-44 lg:max-w-60 hover:cursor-pointer'
        href={href}
      >
        <CustomImage
          Poster={image}
          index={index}
          Title={name}
        />
        <div className='py-5 opacity-0 absolute bottom-0 text-center transition-all ease-in-out duration-300 bg-gray-800/90 w-full group-hover:opacity-100'>
          <h2 className='text-xl'>{name}</h2>
          <div className='flex flex-col gap-0 justify-center lg:gap-5 lg:flex-row'>
            <h3 className='text-lg'>
              Year: <span className='text-green-500'>{year}</span>
            </h3>
            <h3 className='text-lg'>
              Rating: <span className='text-green-500'>{rating}</span>
            </h3>
          </div>
        </div>
      </Link>
    </CardAnimation>
  )
}
