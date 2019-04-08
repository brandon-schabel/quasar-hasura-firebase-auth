import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link'
import Store from '../store'
const VuexStore = Store()

const authMiddleware = new ApolloLink((operation, forward) => {
  const headers = {
    Authorization: VuexStore.getters['userState/getUser'].status ? `Bearer ${VuexStore.getters['userState/getUser'].token}` : {}
  }
  // add the authorization to the headers
  operation.setContext({
    headers
  })

  return forward(operation)
})

const httpLink = createHttpLink({
  uri: 'https://hasura-test-bschabs.herokuapp.com/v1alpha1/graphql',
  fetch: fetch
  // headers
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler({ graphQLErrors, networkError }) {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
})

export default ({ app, Vue }) => {
  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
}
