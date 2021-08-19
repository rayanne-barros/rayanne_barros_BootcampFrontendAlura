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
          <a href="/">Início</a>
          <a href="/sobre">Sobre </a>
          <a href="#projetos">Projetos</a>
        </MenuWrapper.RightSide>
      </MenuWrapper.Global>
    </MenuWrapper>
  );
}
