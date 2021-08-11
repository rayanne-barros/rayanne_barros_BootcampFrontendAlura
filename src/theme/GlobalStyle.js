import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
   }

   ${normalize}
  
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.theme.colors.secondary};
    font-family: ${({ theme }) => theme.theme.fontFamily};
    display: flex;
        min-height: 100vh;
        width: 100%;   
  }

    a {
    text-decoration: none;
    color: ${({ theme }) => theme.theme.colors.primaryFont};
  }
    
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;
