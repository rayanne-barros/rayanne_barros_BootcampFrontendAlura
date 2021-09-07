/* eslint-disable max-len */
import React from 'react';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { ProjetosWrapper } from './style/ProjetosWrapper';
import projetos from '../PageProjetos/projetos.json';

export default function Projetos() {
  return (
    <Box
      minHeight="80vh"
      marginTop={{
        xs: '120px',
        md: '150px',
      }}
    >
      <Text tag="h2" variant="title" textAlign="center" marginBottom="50px"> Projetos Selecionados </Text>
      <ProjetosWrapper>
        <ProjetosWrapper.Card>
          {projetos.projetos.map((item) => (
            <li key={item.link}>
              <a href={`/projeto/${item.slug}`}>
                <Box
                  display="flex"
                  flexDirection="column"
                >
                  <img
                    src={item.image}
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
                  {/* <Text tag="p" variant="paragraph1" className="description">
                    {item.description}
                  </Text> */}
                </Box>
              </a>
            </li>
          ))}
        </ProjetosWrapper.Card>
      </ProjetosWrapper>
    </Box>
  );
}
