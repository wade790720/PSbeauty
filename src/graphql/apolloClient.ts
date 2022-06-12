import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const httpLink = createHttpLink({
  uri: "https://cloud-run-api-psbeauty-deuedjpwuq-de.a.run.app/api/graphql",
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) console.log(`[Network error] ${networkError}`)
  if (graphQLErrors && Array.isArray(graphQLErrors)) {
    // eslint-disable-next-line array-callback-return
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  } else console.log(`[GraphQL error]: Message: ${graphQLErrors}`)
})

const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({}),
})

export default apolloClient
