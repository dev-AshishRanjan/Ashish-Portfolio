import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.hashnode.com/",
  cache: new InMemoryCache(),
});

export const getPosts = gql`
  query GetPosts {
    user(username: "TechJourneyer") {
      publication {
        posts(page: 0) {
          _id
          coverImage
          slug
          title
          brief
        }
      }
    }
  }
`;
