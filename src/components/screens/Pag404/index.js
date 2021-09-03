import React from 'react';
import { Lottie } from '@crello/react-lottie';
import error404 from './animations/error404.json';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

export default function Page404() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        position="relative"
        padding={{
          xs: '0px',
          md: '70px',
        }}
        paddingLeft={{
          xs: '20px',
          md: '40px',
        }}
        paddingRight={{
          xs: '20px',
          md: '40px',
        }}
      >
        <Lottie
          width="auto"
          height="60vh"
          config={{ animationData: error404, loop: true, autoplay: true }}
        />
        <Text tag="p" variant="paragraph1">Calma, já estamos cuidando disso!</Text>
      </Box>
    </>
  );
}
