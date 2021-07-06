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
        type
      }
      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export default CHARACTER;
