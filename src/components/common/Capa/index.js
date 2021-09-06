import React from 'react';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
// import { Image } from './style';

export default function Capa() {
  return (
    <Box
      minHeight="100vh"
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
              Sou desenvolvedora front-end.
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
            {/* <Image>
              <img src="https://avatars.githubusercontent.com/u/81394995?v=4" alt="Minha foto do github" />
            </Image> */}
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
