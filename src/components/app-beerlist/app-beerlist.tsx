import { Component,  h, Prop } from '@stencil/core';
import { Cerveza } from '../app-form/app-form';

@Component({
  tag: 'app-beerlist',
  styleUrl: 'app-beerlist.css',
  shadow: true,
})
export class AppBeerlist {

  @Prop() beerlist: Cerveza[];

  componentWillLoad(): void { }

  render() {
    return (
      <div class="app-beerlist">
        <ul class="app-beerlist--ul"> 
          {this.beerlist.map((i) =>
            <li class="app-beerlist__singleBeerWrapper">
              <img src={i.imagen} alt={`imagen de la cerveza ${i.nombre} sacada de la PunkAPI`} title={`imagen de la cerveza ${i.nombre} sacada de la PunkAPI`} />
              <h2 class="app-beerlist__singleBeerName">
                {i.nombre}
              </h2 >
              <app-beerinfo></app-beerinfo>
            </li>
          )}
        </ul>
      </div>
    );
  }

}
