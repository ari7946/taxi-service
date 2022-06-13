import styled from 'styled-components';

export const TripItemWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap-column: 2rem;
  grid-gap-row: 2rem;
  margin-block: 2rem;
  padding-inline: 1rem;
  padding-block: 1rem;
  border: 1px solid #fff;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-gap-column: 0;
    grid-gap-row: 2rem;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-block: 0.8rem;
  list-style-type: none;
  color: #add8e6 !important;

  .list-heading {
    color: #fff;
    text-transform: uppercase;
    color: #fccd06;
    filter: brightness(70%);
  }

  .list-value {
    font-family: monospace;
    font-size: 0.9rem;
    margin-left: 0.7rem;

    @media (min-width: 700px) {
      font-size: 1.1rem;
    }
  }
`;
