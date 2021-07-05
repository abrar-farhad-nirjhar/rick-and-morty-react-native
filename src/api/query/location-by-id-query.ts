import gql from 'graphql-tag';

const LOCATION = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        image
        name
      }
    }
  }
`;

export default LOCATION;
