import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const ProjetosWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    ${breakpointsMedia({
    xs: css`
         display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
        margin: 0 30px;
        `,
  })}
`;

ProjetosWrapper.Lista = styled.a`
`;

// ProjetosWrapper.Destaque = styled.a`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     border: 1px solid #0862FF;
//     transition: ${({ theme }) => theme.transition};
//     &:hover {
//         box-shadow: 5px 5px 10px 5px #0542AB;
//     }
//     ${breakpointsMedia({
//     md: css`
//         grid-column: 1 / span 2;
//         flex-direction: row;
//         justify-items: center;
//         align-items: center;
//         width: 100%;
//     `,
//   })}
//     .img1{
//         height: 150px;
//         width: 100%;
//         background-repeat: no-repeat;
//         background-size: cover;
//         background-position: center;
//     ${breakpointsMedia({
//     md: css`
//         height: 298px;
//         `,
//   })}
//     }
// `;

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

// ProjetosWrapper.Card = styled.a`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     border: 1px solid #0862FF;
//     width: 100%;
//     transition: ${({ theme }) => theme.transition};

//     &:hover {
//         box-shadow: 5px 5px 10px 5px #0542AB;
//     }

//     .img2, .img3, .img4 {
//     height: 150px;
//     width: 100%;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
//     ${breakpointsMedia({
//     md: css`
//          height: 200px;
//             `,
//   })}
//     }
//     /* .img2{
//         background-image: url('/images/alurakut.png');
//     }
//     .img3{
//         background-image: url('/images/challenge_alura.png');
//     }
//     .img4{
//         background-image: url('/images/todolist1.png');
//     } */
// `;