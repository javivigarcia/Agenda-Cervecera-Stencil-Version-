import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-beerinfo',
  styleUrl: 'app-beerinfo.css',
  shadow: false,
})
export class AppBeerinfo {

  @Prop() open = false;
  @Prop() transparent = false;

  render() {
    return (
      <div>

      </div>

    );
  }

}
