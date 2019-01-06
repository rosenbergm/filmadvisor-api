import { ObjectType, Field } from 'type-graphql'
import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  timestamps: true,
  paranoid: true
})
@ObjectType()
export default class Movie extends Model<Movie> {
  @Field()
  id: number

  @Field()
  @Column
  title: string

  @Field()
  @Column
  director: string

}
