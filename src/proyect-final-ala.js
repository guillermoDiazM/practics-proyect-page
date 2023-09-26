/* eslint-disable import/no-relative-packages */

import { LitElement, html, css } from 'lit';
import '../personalComponents/menu-bar-proyect/menu-bar-proyect.js';
import '../personalComponents/login-tarea-alan/login-tarea-alan.js';

class ProyectFinalAla extends LitElement {
  static properties = {
    header: { type: String },
    flagUserLoggin: { type: Boolean },
    validationEmailCorrect: { type: Boolean },
  };

  static styles = css`
    .loggin {
      padding-top: 2rem;
      opacity: 0%;
      transition-property: opacity;
      transition-duration: 3s;
    }

    .loggin:hover {
      opacity: 100%;
    }

    .headerMenuBar {
      z-index: 0;
    }
  `;

  constructor() {
    super();
    this.flagUserLoggin = false;
    this.validationEmailCorrect = false;
  }

  openLoginUser() {
    this.flagUserLoggin = true;
  }

  get showButtonAccess() {
    return html` <header class="headerMenuBar">
      <menu-bar-proyect
        .flagAccess=${this.validationEmailCorrect}
        @login-open-modal=${this.openLoginUser}
      ></menu-bar-proyect>
    </header>`;
  }

  get generateComponents() {
    return html`
      <div class="loggin">
        <login-tarea-alan
          @validation-correct="${this.testingAlert}"
        ></login-tarea-alan>
      </div>
    `;
  }

  testingAlert() {
    alert('principal page');
    this.flagUserLoggin = false;
    this.validationEmailCorrect = true;
  }

  get showPrincipalPage() {
    return html`
      <header class="headerMenuBar">
        <menu-bar-proyect
          .flagAccess=${true}
          @login-open-modal=${this.openLoginUser}
        ></menu-bar-proyect>
      </header>
    `;
  }

  render() {
    return html`
    <body>
      <div>
        ${
          this.validationEmailCorrect
            ? this.showPrincipalPage
            : this.showButtonAccess
        }
        ${this.flagUserLoggin ? this.generateComponents : ''}
      <div>
    </body>

    `;
  }
}

customElements.define('proyect-final-ala', ProyectFinalAla);
