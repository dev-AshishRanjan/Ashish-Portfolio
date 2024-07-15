import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://gql.hashnode.com/",
  cache: new InMemoryCache(),
});

export const getPosts = gql`
  query Publication {
  publication(host: "techjourneyer.hashnode.dev") {
    isTeam
    title
    posts(first: 10) {
      edges {
        node {
          id
          coverImage {
            attribution
            photographer
            url
          }
          slug
          title
          brief
        }
      }
    }
  }
}
`;
