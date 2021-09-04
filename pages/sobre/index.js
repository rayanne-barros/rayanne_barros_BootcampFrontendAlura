import React from 'react';
import PropTypes from 'prop-types';
import AboutMe from '../../src/components/screens/AboutMe';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import Repositories from '../../src/components/screens/AboutMe/repos';

function SobreScreen({ repos }) {
  return (
    <>
      <AboutMe />
      <Repositories repos={repos} />
    </>
  );
}

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

SobreScreen.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export async function getStaticProps() {
  const repos = await fetch('https://api.github.com/users/rayanne-barros/repos')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida);
  return {
    props: {
      repos,
    },
  };
}
