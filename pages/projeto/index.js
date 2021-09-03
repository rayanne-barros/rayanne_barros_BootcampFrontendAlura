import React from 'react';
import Projetos from '../../src/components/screens/Projetos';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function ProjetoScreen() {
  return (
    <Projetos />
  );
}

export default websitePageHOC(ProjetoScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Meus Projetos',
    },
  },
});
