import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line import/prefer-default-export
export function SEO({ headTitle }) {
  const pageTitleDefault = 'Meu Portfólio';
  const hasTitle = Boolean(headTitle);
  const title = hasTitle ? (`${headTitle} | ${pageTitleDefault}`) : pageTitleDefault;
  const description = 'Projeto criado utilizando Next.js, React e styled-components.';
  const image = '';
  const urlBase = 'https://portfolio-rayanne-barros.vercel.app/';
  return (
    <Head>
      <title>{title}</title>
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Rayanne Barros" />
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="keywords" content="Next.js, React, Jamstack" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="Content-Security-Policy" content="script-src 'self' https://portfolio-rayanne-barros.vercel.app/;" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
