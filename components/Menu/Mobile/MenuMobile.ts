import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--gray);
    opacity: 0.5;
    z-index: 1;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 90%;
    height: 100%;
    background-color: var(--white);
    z-index: 2;

    .head {
      padding: 0.25rem 1.5rem;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      box-shadow: 0 0.125rem 0.3rem -0.0625rem rgba(0, 0, 0, 0.03),
        0 0.275rem 0.75rem -0.0625rem rgba(0, 0, 0, 0.06);

      .close {
        font-size: 0.75rem;
      }
    }
  }
`;

export { Root };
