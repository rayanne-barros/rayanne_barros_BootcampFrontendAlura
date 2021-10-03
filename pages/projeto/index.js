import React from 'react';
import PropTypes from 'prop-types';
import Projetos, { getContent } from '../../src/components/screens/Projetos';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function ProjetoScreen({ projects }) {
  return (
    <Projetos projects={projects} />
  );
}

export default websitePageHOC(ProjetoScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Meus Projetos',
    },
  },
});

export async function getStaticProps() {
  const projects = await getContent();

  return {
    props: {
      projects,
    },
  };
}

ProjetoScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.object.isRequired,
};
