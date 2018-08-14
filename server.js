import express from 'express'; 
import webpack from 'webpack';
import dotenv from 'dotenv';
import expressGraphQL from 'express-graphql';
import schema from './schema/schema'; // our schema file

const APP_PORT = 3000;
const app = express(); 

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Listening');
});