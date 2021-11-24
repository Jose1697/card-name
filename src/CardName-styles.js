/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.card-name {
  padding: 30px;
}

.card-name-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.datos p {
  color: #207af0;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.options a {
  font-weight: bold;
  color: #207af0;
  margin-top: 10px;
}
`;