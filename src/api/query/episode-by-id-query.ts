import gql from 'graphql-tag';

const EPISODE = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        image
        name
      }
    }
  }
`;

export default EPISODE;
