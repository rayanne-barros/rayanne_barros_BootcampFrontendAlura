import React from 'react';
import Text from '../../foundation/Text';
import { MenuWrapper } from './style/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
  {
    texto: 'Projetos',
    url: '/projeto',
  },
  {
    texto: 'Contato',
    url: '/contato',
  },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Global>
        <MenuWrapper.LeftSide>
          Rayanne Barros
        </MenuWrapper.LeftSide>
        <MenuWrapper.RightSide>
          {links.map((link) => (
            <li key={link.url}>
              <Text
                tag="a"
                variant="smallestException"
                href={link.url}
              >
                {link.texto}
              </Text>
            </li>
          ))}
        </MenuWrapper.RightSide>
      </MenuWrapper.Global>
    </MenuWrapper>
  );
}
