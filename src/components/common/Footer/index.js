import React from 'react';
import styled, { css } from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

const FooterWrapper = styled.footer`
 width: 100%;
 height: 63px;
 padding: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: ${({ theme }) => theme.colors.primary};
 list-style: none;
 gap: 42px;
 ${breakpointsMedia({
    md: css`
      padding: 18px 28px;
      height: 56px;
    `,
  })};
 li{
    background-color: ${({ theme }) => theme.colors.primary};        
 }
 a {
   color: ${({ theme }) => theme.colors.primaryFont};
   text-decoration: none;
   transition: .3s;
   &:hover,
   &:focus {
     opacity: .5;
   }
  } 
`;

const redesSociais = [
  {
    name: 'Linkedin',
    logo: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/rayanne-barros-28b55a158/',
  },
  {
    name: 'Github',
    logo: <GitHubIcon />,
    url: 'https://github.com/rayanne-barros',
  },
];

export default function Footer() {
  return (
    <Box
      marginTop={{
        xs: '30px',
        md: '8px',
      }}
      display="flex"
      // position="sticky"
    >
      <FooterWrapper>
        {redesSociais.map((rede) => (
          <li key={rede.url}>
            <Text
              tag="a"
              variant="smallestException"
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rede.logo}
            </Text>
          </li>
        ))}
      </FooterWrapper>
    </Box>
  );
}
