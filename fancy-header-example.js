
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

import {AppElement, html} from '@longlost/app-core/app-element.js';
import htmlString         from './fancy-header-example.html';
import '@longlost/app-core/app-shared-styles.js';
import '@longlost/app-overlays/app-header-overlay.js';
import '@longlost/app-carousels/lazy-carousel.js';
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
            alt: 'bb8 card',
            src: 'https://images.unsplash.com/photo-1588699219474-fce022b9f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
          },
          {
            alt: 'opera house',
            src: 'https://images.unsplash.com/photo-1597730075497-f322c72e3eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
          },
          {
            alt: 'stary scene',
            src: 'https://images.unsplash.com/photo-1597699639766-6d124965a52d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
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
          },
          {
            alt: 'travel',
            src: 'https://raw-dot-custom-elements.appspot.com/PolymerElements/paper-card/v2.0.0/paper-card/demo/travel.png'
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
