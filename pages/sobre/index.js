import React from 'react';
import AboutMe from '../../src/components/screens/AboutMe';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function SobreScreen() {
  return (
    <AboutMe />
  );
}

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
