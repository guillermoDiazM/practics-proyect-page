import { html, css, LitElement } from 'lit';

export class MenuBarProyect extends LitElement {
  static styles = css`
    header {
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      position: fixed;
      z-index: auto;
    }
    nav ul li:hover {
      background: #eca023;
    }
    .hola {
      background-color: aquamarine;
    }
    .flakis {
      background-color: red;
    }
    nav {
      float: left;
    }
    nav ul {
      list-style: none;
      overflow: hidden;
    }
    nav ul li {
      float: left;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
    }
    nav ul li a {
      display: block;
      padding: 20px;
      color: #fff;
      text-decoration: none;
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
    listArray: { type: Array },
    flagAccess: { type: Boolean },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.listArray = [
      'Acceso',
      'Ingres',
      'flakis',
      'diana',
      'pedro',
      'paco',
      'alberto',
    ];
    this.flagAccess = false;
  }

  __increment() {
    this.counter += 1;
  }

  imprimeEv() {
    this.dispatchEvent(
      new CustomEvent('login-open-modal', {
        bubbles: true,
        composed: true,
        detail: 'hola',
      })
    );
  }

  get listMenuBar() {
    let accessCorrect;

    if (!this.flagAccess) {
      accessCorrect = html`
      <header>
        <nav>
          <ul>
            <li><a id="login" @click=${this.imprimeEv}  href=#>${this.listArray[0]}</a></li>
          <ul>
        </nav>
      </header>
      `;
    } else {
      this.listArray.shift();
      accessCorrect = html` <header>
        <nav>
          <ul>
            ${this.listArray.map(
              item => html` <li><a href="hola">${item}</a></li>`
            )}
          </ul>
        </nav>
      </header>`;
    }
    return html`${accessCorrect}`;
  }

  render() {
    return html` ${this.listMenuBar} `;
  }
}
