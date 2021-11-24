import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardName-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-name></card-name>
```

##styling-doc

@customElement card-name
*/
export class CardName extends LitElement {
  static get is() {
    return 'card-name';
  }

  // Declare properties
  static get properties() {
    return {
      title: { type: String, },
      name: { type: String, },
      dni: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.name = '';
    this.dni = '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('card-name-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="card-name">
        <h1>${this.title}</h1>
        <div class="card-name-container">
          <div class="datos">      
            <h4>${this.name}</h4>
            <p>DNI: ${this.dni}</p>
          </div>
          <div class="options">
            <a href="/">Nueva cotización</a>
            <a href="/">Historial de cotizaciones</a>
          </div>
        </div>
        <hr>     
      </div>
    `;
  }
}
