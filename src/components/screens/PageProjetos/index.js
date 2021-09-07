import React from 'react';
import PropTypes from 'prop-types';
import { ProjectWrapper } from './style';
import Text from '../../foundation/Text';
import { Button } from '../../common/Button';

export default function ProjetosPage({ projeto }) {
  return (
    <ProjectWrapper
      display="flex"
    >
      <img src={projeto.image} alt={projeto.title} />
      <ProjectWrapper.TextArea>
        <Text
          variant="titleXS"
        >
          {projeto.title}
        </Text>
        <Text
          as="p"
          variant="paragraph1"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: projeto.description }}
        />
        <Button
          href={projeto.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visite o repositório
        </Button>
      </ProjectWrapper.TextArea>
    </ProjectWrapper>
  );
}

ProjetosPage.defaultProps = {
  projeto: 'undefined',
};

ProjetosPage.propTypes = {
  projeto: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    slug: PropTypes.string,
  }),
};
