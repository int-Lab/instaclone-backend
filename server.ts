import { ApolloServer, gql } from 'apollo-server';

const typeDefs:any = gql`
  type Movie {
    title: String
    year: Int
  }

  type Query {
    movies: [Movie]
    movie: Movie
  }

  type Mutation {
    createMovie(title:String!): Boolean
    deleteMovie(title:String!): Boolean
  }
`;

const resolvers:any = {
  Query: {
    movies: () => [],
    movie: () => [{ title: "Hello", year: 2021 }]
  },
  Mutation: {
    createMovie: (root:any, {title}:any):any => {
      console.log(title);
      return true
    },
    deleteMovie: (root:any, {title}:any):any => {
      console.log(title);
      return true;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on port ${url}`);
});