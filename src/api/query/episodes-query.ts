import gql from 'graphql-tag';

const EPISODES = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export default EPISODES;
