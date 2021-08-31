import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const GhostButton = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryFont};
  // border: 1px solid ${({ theme }) => theme.dark.secondaryText};
`;

const DefaultButton = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryFont};
`;

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 8px;
  padding: 16px 22px;
  text-decoration: none;
  cursor: pointer;
  ${propToStyle('display')};
  ${propToStyle('margin')};
  ${TextStyleVariantsMap.smallestExceptionBold}
  ${({ ghost }) => (ghost ? GhostButton : DefaultButton)};
  border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }
   ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
     /* From md breakpoint */
     ${TextStyleVariantsMap.paragraph2}
    `,
  })}
  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
    `};
`;
