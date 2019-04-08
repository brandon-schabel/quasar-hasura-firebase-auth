import gql from 'graphql-tag'

export const CREATE_POST = gql`
  mutation InsertPostMutation($userId: String, $postBody: String, $postTitle: String) {
    insert_posts(objects: {postBody: $postBody, postTitle: $postTitle, userId: $userId}) {
      affected_rows
    }
  }
`
