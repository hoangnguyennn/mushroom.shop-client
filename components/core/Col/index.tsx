import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';

type ColProps = {
  lg?: number;
};

const Col = styled.div<ColProps>`
  flex: 1;
  min-width: 100%;

  ${mediaQueries('lg')} {
    min-width: calc(100% / 12 * ${props => props.lg || 12});
  }
`;

export default Col;
