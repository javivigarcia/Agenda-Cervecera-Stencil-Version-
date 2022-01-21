import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <stencil-router>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/contactos" component="app-contactos" />
        </stencil-router>
      </div>
    );
  }
}
