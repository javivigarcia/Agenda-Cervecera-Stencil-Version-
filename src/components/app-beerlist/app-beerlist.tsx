import { Component, h, Listen, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { Cerveza } from '../app-form/app-form';
import { JSON } from '../app-shortlist/app-shortlist'

export interface Modal extends Cerveza {
  modalState: boolean;
}


@Component({
  tag: 'app-beerlist',
  styleUrl: 'app-beerlist.css',
  shadow: true,
})

export class AppBeerlist {
  @Prop() contact: JSON;
  @Prop({ mutable: true }) beerlist: Cerveza[];
  @Prop({ mutable: true }) modalBeerList: Modal[] = [];
  @Prop({ mutable: true }) modalTarget: Modal;
  @Prop({ mutable: true }) modalCounter: number=0;  

  componentWillLoad(): void {
    this.beerlist= this.contact.listaBeers;
    for (let j = 0; j < this.beerlist.length; j++) {
      this.modalBeerList[j] = {
        nombre: this.beerlist[j].nombre, descripcion: this.beerlist[j].descripcion, id: this.beerlist[j].id,
        imagen: this.beerlist[j].imagen, estado: this.beerlist[j].estado, modalState: false
      }
    }
  };

  @Event({ bubbles: true, composed: true }) openModal: EventEmitter<Modal>;

  onOpenModal(e: Event, i: Modal): void {
    i.modalState = true;
    this.openModal.emit(i);
    this.modalCounter++;
    console.log('haz clickado en un boton modal', e);
  }


  @Listen('openModal', { target: 'body' })
  openModalHandler(event: CustomEvent<Modal>) {
    this.modalTarget = event.detail;
  }



  @Listen('closeModal', { target: 'body' }) closeModalHandler(e: CustomEvent<Modal>) {
    this.modalTarget = e.detail;
    this.modalCounter--; 

  }

  //public modalWatcher:boolean;
  @Watch('modalTarget') modalTargetHandler(newValue: Modal, oldValue: Modal) {
    for (let j = 0; j < this.modalBeerList.length; j++) {
      if (this.modalTarget.id == this.modalBeerList[j].id) {
        this.modalBeerList[j] = this.modalTarget;
        console.log('has actualizado un Modal de tu modalBeerList')
      }
    }
  }

  public counter: number;
  @Watch('modalcounter') modalBeerListHandler(newValue: number, oldValue: number) {
    this.counter=newValue;
  }

  render() {
    return (
      <div class="app-beerlist" >
        <ul class="app-beerlist--ul">
          {this.modalBeerList.map((i) =>
            <li class="app-beerlist__singleBeerWrapper">
              <img src={i.imagen} alt={`imagen de la cerveza ${i.nombre} sacada de la PunkAPI`} title={`imagen de la cerveza ${i.nombre} sacada de la PunkAPI`} />
              <h2 class="app-beerlist__singleBeerName">
                {i.nombre}
              </h2 >
              <a class={'openModal'} onClick={(e: Event) => { this.onOpenModal(e, i) }}>i</a>
              <app-beerinfo modal={i} modalWatcher={this.modalTarget} ></app-beerinfo>
            </li>
          )}
        </ul>
      </div>
    );
  }

}