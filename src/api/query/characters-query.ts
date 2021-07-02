import gql from 'graphql-tag';

const CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }

      results {
        id
        name
        image
      }
    }
  }
`;

export default CHARACTERS;
