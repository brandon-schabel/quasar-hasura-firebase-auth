import gql from 'graphql-tag'

export const ALL_POSTS = gql`
  query allPosts {
    posts {
      postBody
      postTitle
    }
  }
`

export const ALL_POSTS_CURR_USER = gql`
  query allPostsCurrUser($userId: String!) {
    posts(where: {userId: {_eq: $userId}}) {
      postBody
      postTitle
    }
  }
`
