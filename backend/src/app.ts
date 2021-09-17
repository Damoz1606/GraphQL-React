import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import config from './config/config';

import { schema } from './app/graphql/schema';
import { resolver } from './app/graphql/resolver';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/", graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}));

export default app;