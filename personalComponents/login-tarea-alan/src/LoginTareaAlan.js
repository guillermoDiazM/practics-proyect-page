import { html, css, LitElement } from 'lit';

export class LoginTareaAlan extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
    }

    body {
      background-image: url(../images/bg4.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
    }

    main {
      width: 100%;
      padding: 20px;
      margin: auto;
      margin-top: 100px;
    }

    .contenedor__todo {
      width: 100%;
      max-width: 800px;
      margin: auto;
      position: relative;
    }

    .caja__trasera {
      width: 100%;
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(0, 128, 255, 0.5);
    }

    .caja__trasera div {
      margin: 100px 40px;
      color: white;
      transition: all 500ms;
    }

    .caja__trasera div p,
    .caja__trasera button {
      margin-top: 30px;
    }

    .caja__trasera div h3 {
      font-weight: 400;
      font-size: 26px;
    }

    .caja__trasera div p {
      font-size: 16px;
      font-weight: 300;
    }

    .caja__trasera button {
      padding: 10px 40px;
      border: 2px solid #fff;
      font-size: 14px;
      background: transparent;
      font-weight: 600;
      cursor: pointer;
      color: white;
      outline: none;
      transition: all 300ms;
    }

    .caja__trasera button:hover {
      background: #fff;
      color: #46a2fd;
    }

    /*Formularios*/

    .contenedor__login-register {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 380px;
      position: relative;
      top: -185px;
      left: 10px;

      /*La transicion va despues del codigo JS*/
      transition: left 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .contenedor__login-register form {
      width: 100%;
      padding: 80px 20px;
      background: white;
      position: absolute;
      border-radius: 20px;
    }

    .contenedor__login-register form h2 {
      font-size: 30px;
      text-align: center;
      margin-bottom: 20px;
      color: #46a2fd;
    }

    .contenedor__login-register form input {
      width: 100%;
      margin-top: 20px;
      padding: 10px;
      border: none;
      background: #f2f2f2;
      font-size: 16px;
      outline: none;
    }

    .contenedor__login-register form button {
      padding: 10px 40px;
      margin-top: 40px;
      border: none;
      font-size: 14px;
      background: #46a2fd;
      font-weight: 600;
      cursor: pointer;
      color: white;
      outline: none;
    }

    .formulario__login {
      opacity: 1;
      display: block;
    }
    .formulario__register {
      display: none;
    }

    @media screen and (max-width: 850px) {
      main {
        margin-top: 50px;
      }

      .caja__trasera {
        max-width: 350px;
        height: 300px;
        flex-direction: column;
        margin: auto;
      }

      .caja__trasera div {
        margin: 0px;
        position: absolute;
      }

      /*Formularios*/

      .contenedor__login-register {
        top: -10px;
        left: -5px;
        margin: auto;
      }

      .contenedor__login-register form {
        position: relative;
      }
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
    termEmaliValid: { type: Array },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
    this.termEmaliValid = ['@gmail.com', '@hotmail.com'];
    this.flagValidationEmail = false;
  }

  firstUpdated() {
    this.formulario_login = this.shadowRoot.querySelector('.formulario__login');
    this.formulario_register = this.shadowRoot.querySelector(
      '.formulario__register'
    );
    this.contenedor_login_register = this.shadowRoot.querySelector(
      '.contenedor__login-register'
    );
    this.caja_trasera_login = this.shadowRoot.querySelector(
      '.caja__trasera-login'
    );
    this.caja_trasera_register = this.shadowRoot.querySelector(
      '.caja__trasera-register'
    );
  }

  iniciarSesion() {
    if (window.innerWidth > 850) {
      this.formulario_login.style.display = 'block';
      this.contenedor_login_register.style.left = '10px';
      this.formulario_register.style.display = 'none';
      this.caja_trasera_register.style.opacity = '1';
      this.caja_trasera_login.style.opacity = '0';
    } else {
      this.formulario_login.style.display = 'block';
      this.contenedor_login_register.style.left = '0px';
      this.formulario_register.style.display = 'none';
      this.caja_trasera_register.style.display = 'block';
      this.caja_trasera_login.style.display = 'none';
    }
  }

  register() {
    if (window.innerWidth > 850) {
      this.formulario_register.style.display = 'block';
      this.contenedor_login_register.style.left = '410px';
      this.formulario_login.style.display = 'none';
      this.caja_trasera_register.style.opacity = '0';
      this.caja_trasera_login.style.opacity = '1';
    } else {
      this.formulario_register.style.display = 'block';
      this.contenedor_login_register.style.left = '0px';
      this.formulario_login.style.display = 'none';
      this.caja_trasera_register.style.display = 'none';
      this.caja_trasera_login.style.display = 'block';
      this.caja_trasera_login.style.opacity = '1';
    }
  }

  checkData(ev) {
    ev.preventDefault();
    const emailBox = this.shadowRoot.getElementById('login');
    const password = this.shadowRoot.getElementById('password');
    this.termEmaliValid.forEach(item => {
      if (emailBox.value.includes(item)) {
        this.flagValidationEmail = true;
      }
    });

    if (this.flagValidationEmail) {
      this.checkBaseData(password, emailBox);
    } else {
      alert('favor de ingresar un correo electronico valido');
    }
  }

  checkBaseData(pass, email) {
    // se tiene que realizar la validacion de la base de datos con el usuario ingrsado por el cliente
    if (pass.value && email.value) {
      alert('todo esta correcto puede continuar');
      this.dispatchEvent(
        new CustomEvent('validation-correct', {
          bubbles: true,
          composed: true,
          detail: true,
        })
      );
    } else {
      this.flagValidationEmail = false;
      alert('algo salio mal intentalo nuevamente');
    }
  }

  render() {
    return html`
      <body>
        <main>
          <div class="contenedor__todo">
            <div class="caja__trasera">
              <div class="caja__trasera-login">
                <h3>¿Ya tienes una cuenta?</h3>
                <p>Inicia sesión para entrar en la página</p>
                <button @click=${this.iniciarSesion} id="btn__iniciar-sesion">
                  Iniciar Sesión
                </button>
              </div>
              <div class="caja__trasera-register">
                <h3>¿Aún no tienes una cuenta?</h3>
                <p>Regístrate para que puedas iniciar sesión</p>
                <button @click=${this.register} id="btn__registrarse">
                  Regístrarse
                </button>
              </div>
            </div>

            <!--Formulario de Login y registro-->
            <div class="contenedor__login-register">
              <!--Login-->
              <form action="" class="formulario__login">
                <h2>Iniciar Sesión</h2>
                <input
                  id="login"
                  stype="text"
                  placeholder="Correo Electronico"
                />
                <input id="password" type="password" placeholder="Contraseña" />
                <button @click="${this.checkData}">Entrar</button>
              </form>

              <!--Register-->
              <form action="" class="formulario__register">
                <h2>Regístrarse</h2>
                <input type="text" placeholder="Nombre completo" />
                <input type="text" placeholder="Correo Electronico" />
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button>Regístrarse</button>
              </form>
            </div>
          </div>
        </main>

        <script src="assets/js/script.js"></script>
      </body>
    `;
  }
}
