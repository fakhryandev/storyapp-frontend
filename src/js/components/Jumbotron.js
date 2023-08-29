import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class Jumbotron extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container py-5">
          <h1 class="display-5 fw-bold">Story App</h1>
          <p class="col-md-8 fs-4">Share your story</p>
          <a class="btn btn-primary" href="/add.html">Share Now</a>
        </div>
      </div>
    `;
  }
}

customElements.define('jumbo-tron', Jumbotron);
