import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const ProjetosWrapper = styled.div`
    width: 100%;
    ${breakpointsMedia({
    md: css`
       width: 100%;
       min-height: 100vh;
       margin-left: auto;
       margin-right: auto;
       `,
  })}       
  
  `;

ProjetosWrapper.Card = styled.ul`
     display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    gap: 20px;
    /* padding: 15px;
    /* margin: auto; */
        
    /* margin-left: 25px; */
    //margin-right: 15px;  */
    
    .description {
        display: none;
    ${breakpointsMedia({
    md: css`
         display: initial;
        `,
  })}}    
      
     ${breakpointsMedia({
    md: css`
       display: flex;
      flex-direction: row;
      justify-content: center;
      list-style: none;
      gap: 40px;
      margin: auto;
      padding: 15px 25px;
    `,
  })} 

    .img {
    height: 150px;
    width: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${breakpointsMedia({
    md: css`
         height: 250px;
         width: 400px
            `,
  })}
 }
`;

// ProjetosWrapper.Text = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 10px;
//     .description {
//         display: none;
//     ${breakpointsMedia({
//     md: css`
//          display: initial;
//         `,
//   })}
//     }
// `;
