import { type MovieItem } from '@/types'
import Link from 'next/link'
import { CardAnimation } from '@/components/card-animation'
import { CustomImage } from '@/components/custom-image'
import { ContextMenu } from '@/components/context-menu'

interface MovieCardProps {
  movie: MovieItem
  index: number
  listId: number
}

export const MoviePreview = ({ movie, index, listId }: MovieCardProps) => {
  const { Title, Year, Poster, imdbID, imdbRating } = movie.movie
  const href = `/movie/${imdbID}`

  return (
    <CardAnimation>
      <ContextMenu
        movieId={movie.id}
        listId={listId}
      >
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
      </ContextMenu>
    </CardAnimation>
  )
}
