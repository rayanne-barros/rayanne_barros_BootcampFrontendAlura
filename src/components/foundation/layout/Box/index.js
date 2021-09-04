import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div`
  ${propToStyle('minHeight')}
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexWrap')}
  ${propToStyle('gap')}
  ${propToStyle('margin')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('padding')}
  ${propToStyle('alignItems')}
  ${propToStyle('textAlign')} 
  ${propToStyle('backgroundColor')} 
  ${propToStyle('boxShadow')} 
  ${propToStyle('position')}
  ${propToStyle('bottom')} 
  ${propToStyle('left')}   
`;
