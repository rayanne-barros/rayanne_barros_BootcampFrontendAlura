import { breakpointsMedia } from '../breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];
    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return { [propName]: propValue };
    }
    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };

      return breakpointsMedia(breakpoints);
    }
    return undefined;
  };
}
