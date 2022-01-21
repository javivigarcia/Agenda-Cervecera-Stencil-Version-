import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader {

  render() {
    return (
      <div class="app-header">
        <header>
          <div class={'app-header__wrapper'}>
            <div class={'app-header__leftContentWrapper'}>
              <img src="../../assets/icon/icon.png" alt="Icono de Agenda Cervecera" title='Logo de Agenda Cervecera By FJGJ , caricatura de una cerveza en ByN de perfil' />
              <h1>Bienvenido a tu agenda cervecera!!</h1>
            </div>
            <div class={'app-header__linkWrapper'}>

              <stencil-route-link url="/">
                <button>Crear un Contacto</button>
              </stencil-route-link>
              <stencil-route-link url="/contactos">
                <button>Tus Contactos</button>
              </stencil-route-link>
            </div>
          </div>

        </header>
        <app-root></app-root>
      </div>
    );
  }

}
