import { Component, h } from '@stencil/core';
import { JSON } from '../app-shortlist/app-shortlist'

@Component({
  tag: 'app-contactos',
  styleUrl: 'app-contactos.css',
  shadow: true,
})
export class AppContactos {
  public nombre!: string | null;
  public jsonElement!: JSON;
  public jsonArray: JSON[] = [];


  componentWillLoad(): void {
    for (let i = 0; i < localStorage.length; i++) {
      this.nombre = localStorage.key(i);
      this.jsonElement = JSON.parse(localStorage.getItem(this.nombre || '{null}') || '{null}');
      this.jsonArray.push(this.jsonElement)
    }
  }


  render() {
    return (
      <div class="app-contactos">

        {this.jsonArray.map((i) =>
          <div class="app-contactos__contactoCard">
            <ul>
              <div class="app-card__txt">
                <li class="--bordeless app-card__cardTxt--items"><h2>{i.nombre}</h2></li>
                <div class="app-card__infoContacto">
                  <li class="app-card__cardTxt--items"><p class="app-card__cardTxt--itemsLabel">Teléfono:</p>  <p>{i.telefono}</p></li>
                  <li class="app-card__cardTxt--items"><p class="app-card__cardTxt--itemsLabel">Cumpleaños:</p> <p>{i.fecha}</p></li>
                  <li class="app-card__cardTxt--items"><p class="app-card__cardTxt--itemsLabel">Género:</p> <p>{i.genero}</p></li>
                </div>
              </div>
              <li>
                <p class="app-card__cardTxt--itemsLabel app-card__favBeers--Label">Cervezas favoritas:</p>
                <div class="app-card__app-beerlistWrapper">
                  <app-beerlist beerlist={i.listaBeers}></app-beerlist>
                </div>
              </li>
            </ul>
          </div>
        )}


      </div>
    );
  }

}
