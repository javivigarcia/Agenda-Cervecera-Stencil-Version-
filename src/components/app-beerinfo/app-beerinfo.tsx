import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { Modal } from '../app-beerlist/app-beerlist';

@Component({
  tag: 'app-beerinfo',
  styleUrl: 'app-beerinfo.css',
  shadow: false,
})
export class AppBeerinfo {
  @Prop({ mutable: true }) modal: Modal;
  @Prop({ mutable: true }) modalWatcher: Modal;
  @Prop({ mutable: true }) shower: boolean;
  @Event({ bubbles: true, composed: true }) closeModal: EventEmitter<Modal>;

  componentWillLoad() {
    console.log('tu modal target o modal watcher en este script es:', this.modalWatcher)
  }

  onCloseModal(e: Event, i: Modal): void {
    i.modalState = false;
    this.closeModal.emit(i);
    this.shower = false;
    console.log("Has clickado para cerrar un modal", e,)
    window.location.reload();
  }

  @Watch('shower') modalWatcherHandler(newValue: boolean, oldValue: boolean) {
    if (this.modalWatcher.modalState == true) {
      this.shower = true
    } else { this.shower = false }
  }

  render() {
    return (
      <div class={`modal ${this.modal.modalState && "is-open"}`}>
        <div class={'modal-container'}>
          <button class={'modal-close'} onClick={(e: Event) => { this.onCloseModal(e, this.modal) }}>X</button>
          <h3>{this.modal.nombre}</h3>
          <p>{this.modal.descripcion}</p>
          <div class={'modalImage--Wrapper'}>
            <img class={'modalImage'} src={this.modal.imagen} alt="" />
          </div>
        </div>
      </div>

    );
  }

}
