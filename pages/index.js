/* eslint-disable react/self-closing-comp */
import React from 'react';
import Capa from '../src/components/common/Capa';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  return (
    <>
      <Capa />
    </>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
