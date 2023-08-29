import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavigationBar extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container">
          <a href='/' class="navbar-brand">${this.brandName}</a>
          <button 
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarToggler">
            <nav-links class="ms-auto mb-2 mb-md-0">
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
