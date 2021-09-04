import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const Image = styled.div`
  
  margin: auto;
  
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    ${breakpointsMedia({
    md: css`
      width: 250px;
      height: 250px;
      border-radius: 50%;
    `,
  })}
  }
`;

export const RepoList = styled.ul`
 display:flex;
   flex-flow: column wrap;
   flex-direction: column;
   text-align: center;

${breakpointsMedia({
    md: css`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-self: start;
   justify-content: center;
   gap: 18px;
   margin-bottom: 30px;
   max-width: 500px;
   margin-left: auto;
   margin-right: auto;
  `,
  })}
/* display:flex;
flex-flow: column wrap;
flex-direction: column;
text-align: center; */
ul{
    margin:0;
}
a{
    text-decoration:none;
    color: ${({ theme }) => theme.colors.primaryFont};
    text-shadow: 2px 3px 1px black;
    transition: ${({ theme }) => theme.transition};
}
a:hover{
  color: ${({ theme }) => theme.colors.secondaryFont};
  //transform: scale(1.1);
}
li{
    margin:10px;
    list-style:none;
}
`;
