import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class StoryList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Array, reflect: true },
  };

  constructor() {
    super();
    this.stories = [];
  }

  render() {
    return html`
      <h1>Stories</h1>
      <hr />

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5 g-4">
        ${this.stories.map(this._renderStoryItem)}
      </div>
    `;
  }

  _renderStoryItem(story) {
    const { description, name, photoUrl, createdAt } = story;

    return html`
      <div class="col">
        <card-dashboard
          content=${description}
          name=${name}
          photoUrl=${photoUrl}
          createdAt=${createdAt}
          classes="shadow-sm"
        ></card-dashboard>
      </div>
    `;
  }
}

customElements.define('story-list', StoryList);
