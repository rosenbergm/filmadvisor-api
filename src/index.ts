import { ApolloServer } from 'apollo-server-express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import * as configG from 'config';
import * as jwt from 'express-jwt';
import * as express from 'express';
import { Container } from 'typescript-ioc';
import Database from './services/database';
import MovieResolver from './resolvers/movie.resolver';

interface IConfig {
  port: number;
  jwt_secret: string;
}
const config: IConfig = <any>configG;

const customAuthChecker: any = ({ root, args, context, info }, roles) => {
  return !!context.user || process.env.NODE_ENV === 'test';
};

let server, apolloServer;
buildSchema({
  resolvers: [MovieResolver],
  authChecker: customAuthChecker
})
  .then(schema => {
    apolloServer = new ApolloServer({
      schema,
      engine: {
        apiKey: 'service:minicoders:QAT3KrNUcjOAx8ss3jzByg'
      },
      context: async ({ args, req, res }) => {
        return {
          user: req.user
        };
      }
    });

    const app = express();
    app.use(
      '/',
      jwt({ secret: config.jwt_secret, credentialsRequired: false })
    );

    apolloServer.applyMiddleware({ app, path: '/' });

    server = app.listen({ port: config.port }, () => {
      console.log(`🚀  Server ready at localhost:${config.port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });

export { server, apolloServer };
