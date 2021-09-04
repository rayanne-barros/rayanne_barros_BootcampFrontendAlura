import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { RepoList } from './style';

// eslint-disable-next-line react/prop-types
export default function Repositories({ repos }) {
  return (
    <Grid.Container>
      <Grid.Row
        marginTop={{ xs: '32px', md: '0' }}
        marginBottom={
          {
            xs: '32px',
            // md: '100px'
          }
        }
        justifyContent="center"
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          flex={1}
        >
          <Text
            variant="title"
            tag="h3"
            textAlign="center"
          >
            Meus Repositórios
          </Text>
        </Grid.Col>
      </Grid.Row>
      <RepoList>
        {repos.map((itemAtual) => (
          <li key={itemAtual.id}>
            <a target="_blank" href={itemAtual.html_url} rel="noreferrer">
              <span>{itemAtual.name}</span>
            </a>
          </li>
        ))}
      </RepoList>
    </Grid.Container>
  );
}
Repositories.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      html_url: PropTypes.string,
    }),
  ).isRequired,
};
