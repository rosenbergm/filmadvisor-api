import { Resolver, Arg, Query, Mutation } from 'type-graphql'
import { Inject } from 'typescript-ioc'
import Database from '../services/database'
import Movie from '../models/movie.model'
import { MovieInput } from '../types/movie'

@Resolver(Movie)
export default class MovieResolver {
  @Inject private database: Database

  @Query(returns => [Movie])
  movies () {
    return this.database.models.Movie.findAll({})
  }

  @Query(returns => Movie)
  movie (@Arg('id') movieId: number) {
    return this.database.models.Movie.findById(movieId)
  }

  @Mutation(returns => Movie)
  createMovie (@Arg('data') data: MovieInput) {
    return this.database.models.Movie.create(data)
  }

  @Mutation(returns => Movie)
  async updateMovie (@Arg('id') movieId: number, @Arg('data') data: MovieInput) {
    const movie = await this.database.models.Movie.findById(movieId)

    const updatedMovie = {
      title: data.title,
      director: data.director
    }

    return movie.update(updatedMovie)
  }

  @Mutation(returns => Boolean)
  deleteMovie (@Arg('id') movieId: number) {
    return this.database.models.Movie.destroy({ where: { id: movieId } })
  }

}
