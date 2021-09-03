/* eslint-disable max-len */
import React from 'react';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { ProjetosWrapper } from './style/ProjetosWrapper';

// const meusProjetos = [
//   {
//     title: 'Instalura',
//     url: 'https://github.com/rayanne-barros/instalura-base',
//     src: '/images/projeto-base.png',
//     description: ' É uma versão do Instagram, desenvolvido durante o Bootcamp de Front-End Avançado da Alura.',
//   },
//   {
//     title: 'Alurakut',
//     url: 'https://github.com/rayanne-barros/Imersao_React',
//     src: '/images/alurakut.png',
//     description: '',
//   },
//   {
//     title: 'Challenge Alura',
//     url: 'https://github.com/rayanne-barros/Challenge_alura_frontend',
//     src: '/images/challenge_alura.png',
//     description: '',
//   },
// ];

export default function Projetos() {
  return (
    <Box
      minHeight="100vh"
      marginTop={{
        xs: '100px',
        md: '150px',
      }}
    >
      <Text id="projetos" tag="h2" variant="title" textAlign="center" marginBottom="30px"> Meus Projetos     </Text>
      <ProjetosWrapper>
        {/* <ProjetosWrapper.Destaque href="https://instalura-base-git-develop-rayanne-barros.vercel.app/" target="_blank" rel="noopener noreferrer" title="Site Instalura">
          <div className="img1" />
          <ProjetosWrapper.Text className="projetosWrapper">
            <Text tag="h3" variant="subTitle" color="primaryFont" textAlign="center">Instalura</Text>
            <Text className="description" tag="p" variant="smallestException" textAlign="center" maxWidth="450px">
              É uma versão do Instagram, desenvolvido durante o Bootcamp de Front-End Avançado da Alura.
            </Text>
          </ProjetosWrapper.Text>
        </ProjetosWrapper.Destaque>
        <ProjetosWrapper.Card href="https://github.com/rayanne-barros/Imersao_React" target="_blank" rel="noopener noreferrer" title="Github Alurakut">
          <div className="img2" />
          <Text tag="h3" variant="subTitle" color="primaryFont" textAlign="center" padding="20px">Alurakut</Text>
        </ProjetosWrapper.Card>
        <ProjetosWrapper.Card href="https://github.com/rayanne-barros/Challenge_alura_frontend" target="_blank" rel="noopener noreferrer">
          <div className="img3" />
          <Text tag="h3" variant="subTitle" color="primaryFont" textAlign="center" padding="20px">Challenge Alura</Text>
        </ProjetosWrapper.Card> */}
      </ProjetosWrapper>
    </Box>
  );
}
