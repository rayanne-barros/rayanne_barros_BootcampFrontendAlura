/* eslint-disable max-len */
import React from 'react';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
// import { Image } from './style';

export default function AboutMe() {
  return (
    <Box
      minHeight="90vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
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
                md: '130px',
              }}
            >
              Graduada em Engenharia Química, atualmente em transição de carreira para a área de desenvolvimento web (com foco em: Front-End).
              {' '}
              <br />
              Aluna do Bootcamp de Front-End Avançado da Alura.
              {' '}
              <br />
              Buscando minha primeira oportunidade no mercado de trabalho.
            </Text>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            marginTop={{
              xs: '70px',
              sm: '90px',
            }}
          >
            <img
              style={{ display: 'block', margin: 'auto', maxWidth: '80%' }}
              src="/images/img_me.png"
              alt="Minha foto"
            />
            {/* <Image>
              <img src="https://avatars.githubusercontent.com/u/81394995?v=4" alt="Minha foto do github" />
            </Image> */}
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
