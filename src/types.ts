export interface MovieList {
  id: string
  name: string
  email: string
  created_at: string
}

export interface MovieItem {
  created_at: string
  id: number
  imdb_id: string
  movie_list_id: number
  movie: MoviePreview
}

interface MoviePreview {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface ImdbMovie {
  actors: string[]
  desc: string
  directors: string[]
  genre: string[]
  image_url: string
  thumb_url: string
  imdb_url: string
  name: string
  rating: number
  year: number
}

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
  Ratings: Rating[]
}

interface Rating {
  sourceL: string
  value: string
}
