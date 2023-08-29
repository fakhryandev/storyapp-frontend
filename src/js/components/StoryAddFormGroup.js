import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class StoryAddFormGroup extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="mb-3">
        <label for="validationCustomDescription" class="form-label">Story</label>
        <textarea-validation
          textareaId="validationCustomDescription"
          validFeedbackMessage="Cool"
          invalidFeedbackMessage="Tell us your story"
          previewElem="story-add-preview"
          required
        ></textarea-validation>
      </div>
      <div class="mb-3">
        <label for="validationCustomPhoto" class="form-label">Image</label>
        <input-image-validation
          imageId="validationCustomPhoto"
          validFeedbackMessage="Cool"
          invalidFeedbackMessage="Share us image about your story"
          previewElem="story-add-preview"
          required
        ></input-image-validation>
      </div>
      <div class="text-end">
        <button class="btn btn-primary" type="submit">Share</button>
      </div>
    `;
  }
}

customElements.define('story-add-form-group', StoryAddFormGroup);
