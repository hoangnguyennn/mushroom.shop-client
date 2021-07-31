import { createGlobalStyle } from 'styled-components';

const NProgress = createGlobalStyle`
#nprogress {
  pointer-events: none;

  .bar {
    background: #4361ee;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 0.125rem;
  }

  .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #4361ee, 0 0 5px #4361ee;
    opacity: 1;

    transform: rotate(3deg) translate(0px, -4px);
  }

  .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: #4361ee;
    border-left-color: #4361ee;
    border-radius: 50%;

    animation: nprogress-spinner 400ms linear infinite;
  }
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;

  #nprogress {
    .spinner,
    .bar {
      position: absolute;
    }
  }
}

@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export default NProgress;
