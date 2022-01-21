import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter {

  render() {
    return (
      <div>
        <footer>
          <p> Página creada a modo de práctica de Stencil</p>
        </footer>
      </div>
    );
  }

}
