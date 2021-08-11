import React from 'react';
import Footer from '../src/components/Footer';
import Menu from '../src/components/Menu';
import Projetos from '../src/components/Projetos';
import Capa from '../src/components/Capa';

export default function Home() {
  return (
    <>
      <Menu />
      <Capa />
      <Projetos />
      <Footer />
    </>
  );
}
