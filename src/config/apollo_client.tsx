import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { GQL_URL, isDev } from './config'
import {ShowMessage} from "@/components/lib/Toaster/ShowMessage";

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      isDev && console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      if (operation?.query?.definitions.find((d: any) => d.operation === 'mutation')) {
        return ShowMessage("ERROR", message)
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    })
})

const httpLink = new HttpLink({
  uri: GQL_URL,
  credentials: 'include'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink])
})

export default client
