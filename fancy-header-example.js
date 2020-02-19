
/**
  * `fancy-header-example`
  *
  *   Reference implementation of app-header-overlay and lazy-carousel in action.
  *
  * @customElement
  * @polymer
  * @demo demo/index.html
  *
  **/

import {
  AppElement, 
  html
}                 from '@longlost/app-element/app-element.js';
import htmlString from './fancy-header-example.html';
import '@longlost/app-shared-styles/app-shared-styles.js';
import '@longlost/app-overlays/app-header-overlay.js';
import '@longlost/lazy-carousel/lazy-carousel.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-fab/paper-fab.js';


class FancyHeaderExample extends AppElement {
  static get is() { return 'fancy-header-example'; }

  static get template() {
    return html([htmlString]);
  }


  static get properties() {
    return {

      _images: {
        type: Array,
        value: [
          {
            alt: 'bg2',
            src: 'https://app-layout-assets.appspot.com/assets/bg2.jpg'
          },
          {
            alt: 'bg3',
            src: 'https://app-layout-assets.appspot.com/assets/bg3.jpg'
          },
          {
            alt: 'bg4',
            src: 'https://app-layout-assets.appspot.com/assets/bg4.jpg'
          },
          {
            alt: 'donuts',
            src: 'https://raw-dot-custom-elements.appspot.com/PolymerElements/paper-card/v2.0.0/paper-card/demo/donuts.png'
          },
          {
            alt: 'trip',
            src: 'https://raw-dot-custom-elements.appspot.com/PolymerElements/paper-card/v2.0.0/paper-card/demo/trip.png'
          },
          {
            alt: 'house',
            src: 'https://raw-dot-custom-elements.appspot.com/PolymerElements/paper-card/v2.0.0/paper-card/demo/house.png'
          }
        ]
      }

    };
  }


  open() {
    return this.$.overlay.open();
  }
  
}

window.customElements.define(FancyHeaderExample.is, FancyHeaderExample);
