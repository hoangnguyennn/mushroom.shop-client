import { createGlobalStyle } from 'styled-components';

const Custom = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: var(--main-text-color-2);
  font-family: sans-serif;
  line-height: 1.5;
  padding-top: 71px;
}

a {
  outline: none;
}

ul {
  list-style-type: none;
}

.disabled {
  cursor: not-allowed !important;
  pointer-events: none !important;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}

/* width */
::-webkit-scrollbar {
  width: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f9f9f9;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ccc;
  border: 4px solid #f9f9f9;
  border-radius: 999px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #606060;
}
`;

export default Custom;
