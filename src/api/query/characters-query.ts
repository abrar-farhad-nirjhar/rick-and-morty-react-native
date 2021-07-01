import gql from 'graphql-tag';

export const CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
      }
    }
  }
`;
