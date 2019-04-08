import gql from 'graphql-tag'

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      postBody
      postTitle
    }
  }
`
