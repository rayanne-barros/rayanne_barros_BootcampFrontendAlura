import React from 'react';
import styled, { css } from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { Box } from '../foundation/layout/Box';

const FooterWrapper = styled.footer`
 width: 100%;
 min-height: 10vh;
 padding: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: ${({ theme }) => theme.theme.colors.primary};
 list-style: none;
 gap: 42px;
 ${breakpointsMedia({
    md: css`
      padding: 18px 28px;
    `,
  })};
 li{
    background-color: ${({ theme }) => theme.theme.colors.primary};        
 }
 a {
   color: ${({ theme }) => theme.theme.colors.primaryFont};
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
        xs: '50px',
        md: '150px',
      }}
    >
      <FooterWrapper>
        {redesSociais.map((rede) => (
          <li key={rede.url}>
            <a href={rede.url}>
              {rede.logo}
            </a>
          </li>
        ))}
      </FooterWrapper>
    </Box>
  );
}
