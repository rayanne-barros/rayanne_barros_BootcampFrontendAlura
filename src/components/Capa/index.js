import React from 'react';
import { Box } from '../foundation/layout/Box';
import { Grid } from '../foundation/layout/Grid';
import Text from '../foundation/Text';

export default function Capa() {
  return (
    <Box
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
              tag="h2"
              variant="titleXS"
              marginTop={{
                xs: '42px',
                md: '100px',
              }}
            >
              Oi, meu nome é:
            </Text>
            <Text tag="h1" variant="title">
              Rayanne Barros!
            </Text>
            <Text tag="p" variant="paragraph1" marginTop="2px">
              Sou desenvolvedora front-end em formação.
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
              src="./images/img_me.png"
              alt="Minha foto"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
