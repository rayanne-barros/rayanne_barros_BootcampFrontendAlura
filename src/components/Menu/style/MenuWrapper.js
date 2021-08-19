import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const MenuWrapper = styled.nav`
    width: 100%;
    min-height: 10vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 38px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 400;
    transition: 0.6s;

    ${breakpointsMedia({
    md: css`
        padding: 18px 28px;
    `,
  })};
`;

MenuWrapper.Global = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;

${breakpointsMedia({
    xs: css`
    width: 100%;
    font-size: 14px;
    `,
    md: css`
    width: 100%;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    `,
    lg: css`
    max-width: 1160px;
    `,
    xl: css`
    max-width: 1222px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  order: 1; 
  display: none;

  ${breakpointsMedia({
    md: css`
      display: block;
    `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  order: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${breakpointsMedia({
    md: css`
      max-width: 480px;
    `,
  })}
   
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryFont};
    transition: 200ms ease-in-out;    
    &:hover,
    &:focus {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primaryFont};
      
    }
  }
`;
