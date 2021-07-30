import Container from '@components/core/Container';
import styled from 'styled-components';

export default styled.header`
  padding: 12px 16px;
  border-bottom: 1px solid #dae1e7;

  ${Container} {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
