import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import Page404 from '../src/components/screens/Pag404';

function HomeScreen() {
  return (
    <Page404 />
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Erro 404',
    },
  },
});
