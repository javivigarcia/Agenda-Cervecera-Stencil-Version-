import { Component, h } from '@stencil/core';
import { Cerveza } from '../app-form/app-form';

export type JSON = { nombre: string, telefono: string, fecha: string, genero: string, listaBeers: Cerveza[] }

@Component({
  tag: 'app-shortlist',
  styleUrl: 'app-shortlist.css',
  shadow: false,
})
export class AppShortlist {

  public nombre!: string | null;
  public jsonElement!: JSON;
  public jsonArray: JSON[] = [];



  render() {
    for (let i = 0; i < localStorage.length; i++) {
      this.nombre = localStorage.key(i);
      this.jsonElement = JSON.parse(localStorage.getItem(this.nombre || '{null}') || '{null}');
      this.jsonArray.push(this.jsonElement)
    }
    return (
      <section class="--flex-center app-shortList__listaSection">
        <div class="app-shortList__lista--wrapper">
          <caption class="app-shortList__caption ">Contactos de tu agenda cervecera
          </caption>
          <div class="--flex-center app-shortList__tableWrapper">
            <table class="app-shortList__table table table-responsive">
              <thead>
                <tr>
                  <th scope="col" class="app-shortList__th">Nombre</th>
                  <th scope="col" class="app-shortList__th">Teléfono </th>
                </tr>
              </thead>
              <tbody>
                {this.jsonArray.map((n) => <tr>
                  <th scope="row" class="app-shortList__td">{n.nombre}</th>
                  <td class="app-shortList__td">{n.telefono}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
          <caption class={"app-shortList__caption--pie"}> (Para más informacion visita "Tus Contactos"
            )</caption>
        </div>
      </section>
    );
  }

}
