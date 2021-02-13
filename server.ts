import { ApolloServer, gql } from 'apollo-server';

const typeDefs:any = gql`
  type Query {
    hello: String
  }
`;

const resolvers:any = {
  Query: {
    hello: () => 'world',
  },
};

const server:any = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }:any): any => {
  console.log(`Server is running on port ${url}`);
});