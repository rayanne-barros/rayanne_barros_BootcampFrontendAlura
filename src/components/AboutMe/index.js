/* eslint-disable max-len */
import React from 'react';
import { Box } from '../foundation/layout/Box';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';

export default function AboutMe() {
  return (
    <Box
      id="home"
      minHeight="70vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            value={{ xs: 12, md: 6 }}
            marginBottom={{
              xs: '42px',
              sm: 'initial',
            }}
          >
            <Text
              tag="p"
              variant="paragraph1"
              marginTop={{
                xs: '42px',
                md: '100px',
              }}
            >
              Graduada em Engenharia Química pela Universidade Federal da Paraíba (UFPB), esse ano me interessei pela área de tecnologia da informação visando transição de carreira comecei a estudar para a área de desenvolvimento web (com foco em: Front-End).
              {' '}
              <br />
              Possuo conhecimento em: HTML5, CSS3, JavaScript e Git/Github.
              {' '}
              <br />
              Me especializando em: Next.js, React e styled-components.
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            marginTop={{
              xs: '42px',
              sm: '90px',
            }}
          >
            <img
              style={{ display: 'block', margin: 'auto', maxWidth: '80%' }}
              src="./images/img_me.png"
              alt="Minha foto"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
