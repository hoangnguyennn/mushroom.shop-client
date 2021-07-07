import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  .spin {
    width: 3rem;
    height: 3rem;
    border: 3px solid transparent;
    border-right-color: var(--primary);
    border-radius: 50%;

    animation: spin 1s linear infinite;
  }
`;
