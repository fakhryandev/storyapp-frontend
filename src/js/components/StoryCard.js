import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import DateHelper from '../helpers/DateHelper';

class CardDashboard extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    name: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    classes: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.content = '';
    this.name = '';
    this.photoUrl = '';
    this.createdAt = '';
    this.classes = '';
  }

  render() {
    return html`
      <div class="card ${this.classes}">
        <img src=${this.photoUrl} class="card-img-top" alt="${this.name}-photo" />
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.content}</p>
        </div>
        <div class="card-footer text-muted">${DateHelper.formatDate(this.createdAt)}</div>
      </div>
    `;
  }
}

customElements.define('card-dashboard', CardDashboard);
