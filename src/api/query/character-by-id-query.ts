import gql from 'graphql-tag';

const CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      image
      episode {
        id
        name
      }
    }
  }
`;

export default CHARACTER;
