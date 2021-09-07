import React from 'react';
import ProjetosPage from '../../src/components/screens/PageProjetos';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import projetos from '../../src/components/screens/PageProjetos/projetos.json';

function ProjetosScreen({ card }) {
  return (
    <ProjetosPage
      projeto={card}
    />
  );
}

ProjetosScreen.propTypes = ProjetosPage.propTypes;

export default websitePageHOC(ProjetosScreen);

export async function getStaticProps({ params }) {
  const projectsArray = projetos.projetos;
  const dadosDaPagina = projectsArray.reduce((valorAcumulado, eachProjeto) => {
    const foundProject = eachProjeto.slug === params.slug;

    if (foundProject) {
      return {
        ...valorAcumulado,
        card: eachProjeto,
      };
    }

    return valorAcumulado;
  }, {});

  return {
    props: {
      card: dadosDaPagina.card,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.card.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const projectsArray = projetos.projetos;
  const paths = projectsArray.reduce((valorAcumulado, eachProjeto) => {
    const projectSlug = eachProjeto.slug;
    // return { params: { slug: projectSlug } };

    return [
      ...valorAcumulado,
      { params: { slug: projectSlug } },
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
