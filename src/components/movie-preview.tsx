import { type MoviePreview as MoviePreviewType } from '@/types'
import Link from 'next/link'
import { CardAnimation } from './card-animation'
import { CustomImage } from './custom-image'

interface MovieCardProps {
  movie: MoviePreviewType
  index: number
}

export const MoviePreview = ({ movie, index }: MovieCardProps) => {
  const { Title, Year, Poster, imdbID, imdbRating } = movie
  const href = `/movie/${imdbID}`
  console.log(movie)

  return (
    <CardAnimation>
      <Link
        className='py-3 max-w-44 lg:max-w-60 hover:cursor-pointer'
        href={href}
      >
        <CustomImage
          Poster={Poster}
          index={index}
          Title={Title}
        />
        <div className='py-5 opacity-0 absolute bottom-0 text-center transition-all ease-in-out duration-300 bg-gray-800/90 w-full group-hover:opacity-100'>
          <h2 className='text-xl'>{Title}</h2>
          <div className='flex flex-col gap-0 justify-center lg:gap-5 lg:flex-row'>
            <h3 className='text-lg'>
              Year: <span className='text-green-500'>{Year}</span>
            </h3>
            <h3 className='text-lg'>
              Rating: <span className='text-green-500'>{imdbRating}</span>
            </h3>
          </div>
        </div>
      </Link>
    </CardAnimation>
  )
}
