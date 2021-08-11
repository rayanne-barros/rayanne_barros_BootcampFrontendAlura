import React from 'react';
import { MenuWrapper } from './style/MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Global>
        <MenuWrapper.LeftSide>
          Rayanne Barros
        </MenuWrapper.LeftSide>
        <MenuWrapper.RightSide>
          <a href="#about-me">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#contact">Contato</a>
        </MenuWrapper.RightSide>
      </MenuWrapper.Global>
    </MenuWrapper>
  );
}
