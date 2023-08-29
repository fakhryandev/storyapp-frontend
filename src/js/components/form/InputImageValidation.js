import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputImageValidation extends LitWithoutShadowDom {
  static properties = {
    imageId: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    previewElem: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.validFeedbackMessage = '';
    this.invalidFeedbackMessage = '';
    this.previewElem = null;

    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('imageId')) {
      throw new Error(`Attribute "imageId" must be implemented on element ${this.localName}`);
    }
  }

  _updatePhotoPreview() {
    const photoImgInput = document.querySelector(`#validationCustomPhoto`);

    const photo = photoImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (this.previewElem) {
        const previewElem = document.querySelector(this.previewElem);
        previewElem.setAttribute('imageUrl', event.target.result);
      }
    };

    reader.readAsDataURL(photo);
  }

  render() {
    return html`
      <input
        id="${this.imageId || nothing}"
        type="file"
        class="form-control form-control-sm"
        accept="image/*"
        @change=${this._updatePhotoPreview}
        ?required=${this.required}
      />
      <div class="valid-feedback">${this.validFeedbackMessage}</div>
      <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    `;
  }
}

customElements.define('input-image-validation', InputImageValidation);
