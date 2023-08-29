import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import DateHelper from '../helpers/DateHelper';

class StoryAddPreview extends LitWithoutShadowDom {
  static properties = {
    imageUrl: { type: String, reflect: true },
    username: { type: String, reflect: true },
    description: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.imageUrl = 'https://source.unsplash.com/1200x700/?wildlife';
    this.username = 'John Doe';
    this.description = '';
  }

  render() {
    return html`
      <h2 class="text-center">Preview</h2>
      <div class="card">
        <img class="card-img-top" src=${this.imageUrl} alt="Preview" />
        <div class="card-body">
          <h5 class="card-title">${this.username}</h5>
          <p class="card-text" id="previewStory">${this.description}</p>
        </div>
        <div class="card-footer">${DateHelper.formatDate(new Date())}</div>
      </div>
    `;
  }
}

customElements.define('story-add-preview', StoryAddPreview);
