import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TextareaValiation extends LitWithoutShadowDom {
  static properties = {
    textareaId: { type: String, reflect: true },
    value: { type: String, reflect: true },
    rows: { type: Number, reflect: true },
    placeholder: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    previewElem: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.rows = 3;
    this.placeholder = 'Tell us what your story...';
    this.required = false;

    this.previewElem = null;

    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('textareaId')) {
      throw new Error(`Attribute "textareaId" must be implemented on element ${this.localName}`);
    }
  }

  _onInput(event) {
    this.value = event.target.value;
    if (this.previewElem) {
      const previewElem = document.querySelector(this.previewElem);
      previewElem.setAttribute('description', this.value);
    }
  }

  render() {
    return html`
      <textarea
        id="${this.textareaId || nothing}"
        class="form-control"
        rows="${this.rows || nothing}"
        placeholder="${this.placeholder}"
        @input=${this._onInput}
        ?required="${this.required}"
      ></textarea>
      <div class="valid-feedback">${this.validFeedbackMessage}</div>
      <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    `;
  }
}

customElements.define('textarea-validation', TextareaValiation);
