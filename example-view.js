/**
  *
  * `example-view`
  *
  *   Reference view element for app-main/app-shell examples
  *
  * @customElement
  * @polymer
  * @demo demo/index.html
  *
  **/
  
import {AppElement, html} from '@longlost/app-element/app-element.js';
import htmlString         from './example-view.html';
import '@longlost/app-shared-styles/app-shared-styles.js';


class ExampleView extends AppElement {
  static get is() { return 'example-view'; }
  
  static get template() {
    return html([htmlString]);
  }


  static get properties() {
    return {

      page: String, // ie. 'view2'

      label: String // ie. 'View 2'

    };
  }


  __computeCircleNum(page) {
    return page.slice(page.length -1);
  }

}

window.customElements.define(ExampleView.is, ExampleView);
