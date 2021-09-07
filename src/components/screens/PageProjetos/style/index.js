import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const ProjectWrapper = styled.section`
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height:100vh;
width:100%;
padding: 1rem;
padding-top: 100px;
//margin-left: 20%;
img{
    width:80%;
}
${breakpointsMedia({
    md: css`     
    padding-top: 110px;
    margin-bottom: 110px;
    
    img{
        width:45%;
    }
    `,
  })}
`;

ProjectWrapper.TextArea = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    padding-left:1rem;
    flex-shrink: 0;
${breakpointsMedia({
    md: css`
    width:100%;
    justify-content: center;
    padding:0;
    margin-top: 10px;
    `,
  })}
  `;
