import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const Image = styled.div`
  //display: block;
  margin: auto;
  align-items: center;
  
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
