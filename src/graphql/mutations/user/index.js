import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation AddUser($userInput: user_insert_input! ) {
    affected_rows
  }
`
