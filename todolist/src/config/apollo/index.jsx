import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://excited-duck-96.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        "sjKvXefr9UXtuHVCdyg8mHGPhCN8j2ZUPBONqNFeB4cmWaAgp6SNjjCSGwSWhY8f",
    },
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
