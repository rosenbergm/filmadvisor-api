import { InputType, Field, ObjectType } from 'type-graphql'

@ObjectType()
export class MovieResponse {
  @Field()
  title: string

  @Field()
  director: string

}

@InputType()
export class MovieInput implements Partial<{ title: string, director: string }> {
  @Field()
  title: string
  @Field()
  director: string
}