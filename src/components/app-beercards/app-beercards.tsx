import { Component, h, Prop,Event,EventEmitter } from '@stencil/core';
import { Cerveza } from '../app-form/app-form';

@Component({
  tag: 'app-beercards',
  styleUrl: 'app-beercards.css',
  shadow: true,
})

export class AppBeercards {
  public checkboxCounter: number = 0;
  @Prop() listaBeer: Cerveza[];
  @Prop() changeFormValue: Function;

  @Event({bubbles:true,composed:true}) checker: EventEmitter<number>;

  onCheck(e: Event, i: Cerveza): void {
    i.estado = !i.estado
    console.log('Has cambiado el valor a :', i.estado)
    if (i.estado == true) {
      this.checkboxCounter = this.checkboxCounter + 1;
    } else {
      this.checkboxCounter = this.checkboxCounter - 1;
    }
    this.checker.emit(this.checkboxCounter);
    console.log(this.checkboxCounter);
    //console.log(i);
    console.log(e);


  };



  render() {

    return (
      <div>
        <div class="app-beercards__beersLabel--wrapper">
          <div class="app-beercards__beersLabel">
            <label htmlFor="checkBox"> Cervezas Favoritas: </label>
          </div>
        </div>
        <div class="app-beercards__contentWrapper">
          {this.listaBeer.map((birra) => <div class="app-beercards__cardWrapper">
            <div class="app-beercards__textWrapper">
              <h2>
                {birra.nombre}
              </h2>
              <p>
                {birra.descripcion}
              </p>
            </div>
            <div class="app-beercards__miscelaneoWrapper">
              <div class="app-beercards__imgWrapper">
                <img src={birra.imagen} alt={`imagen de la cerveza ${birra.nombre} sacada de la PunkAPI`} title={`imagen de la cerveza ${birra.nombre} sacada de la PunkAPI`} />
              </div>
              <div class="app-beercards__checkboxWrapper">
                <input name='checkBox' type="checkbox" class="form-check-input" onChange={(e: Event) => {
                  this.onCheck(e, birra);
                }} />
              </div>
            </div>
          </div>)}
        </div>
      </div>
    );
  }

}
