import gql from 'graphql-tag';

const Locations = gql`
  query Locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
      }
    }
  }
`;

export default Locations;
