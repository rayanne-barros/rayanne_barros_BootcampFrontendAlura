/* eslint-disable max-len */
import React from 'react';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { ProjetosWrapper } from './style/ProjetosWrapper';

const meusProjetos = [
  {
    title: 'Instalura',
    url: 'https://github.com/rayanne-barros/instalura-base',
    src: '/images/projeto-base.png',
    description: ' É uma versão do Instagram, desenvolvido durante o Bootcamp de Front-End Avançado da Alura.',
  },
  {
    title: 'Alurakut',
    url: 'https://github.com/rayanne-barros/Imersao_React',
    src: '/images/alurakut.png',
    description: 'Para matar a saudades do velho e bom Orkut',
  },
  {
    title: 'Alura Dev',
    url: 'https://github.com/rayanne-barros/Challenge_alura_frontend',
    src: '/images/challenge_alura.png',
    description: 'Alura Dev é um editor de código que te permite salvar o projeto (códigos) na aba comunidade.',
  },
];

export default function Projetos() {
  return (
    <Box
      minHeight="90vh"
      marginTop={{
        xs: '120px',
        md: '170px',
      }}
    >
      <Text id="projetos" tag="h2" variant="title" textAlign="center" marginBottom="50px"> Projetos Selecionados </Text>
      <ProjetosWrapper>
        <ProjetosWrapper.Card>
          {meusProjetos.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Site Live"
                className="itemsProjetos"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="img"
                  />
                  <Text
                    tag="h2"
                    variant="paragraph1"
                    textAlign="center"
                  >
                    {item.title}
                  </Text>
                  <Text tag="p" variant="paragraph1" className="description">
                    {item.description}
                  </Text>
                </Box>
              </a>
            </li>
          ))}
        </ProjetosWrapper.Card>
      </ProjetosWrapper>
    </Box>
  );
}
