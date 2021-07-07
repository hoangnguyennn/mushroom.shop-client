import { createGlobalStyle } from 'styled-components';

const Variable = createGlobalStyle`
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #98a5b1;
  --gray-2: #6c757f;
  --gray-dark: #343a40;
  --primary: #006dcf;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --darker: #242a30;

  --main-text-color: #627182;
  --main-text-color-2: #231f20;

  --primary-hover: #2875bb;
  --secondary-hover: #5a6268;
  --success-hover: #218838;
  --info-hover: #138496;
  --warning-hover: #e0a800;
  --danger-hover: #c82333;
  --light-hover: #e2e6ea;
  --dark-hover: #23272b;

  --primary-shadow: #b8daff;
  --order-hover: #f6fcff;

  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: 'Rubik', sans-serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
}
`;

export default Variable;
