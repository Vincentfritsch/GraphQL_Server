const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpointconstr app = express();
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));