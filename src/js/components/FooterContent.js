import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterContent extends LitWithoutShadowDom {
  render() {
    return html`<div
      class="container d-flex flex-wrap justify-content-between align-items-center py-3"
    >
      <p class="col-md-4 mb-0">
        © Muhammad Fakhryan Z. ${new Date().getFullYear()} All rights reserved.
      </p>
    </div>`;
  }
}

customElements.define('footer-content', FooterContent);
