const Add = {
  async init() {
    await this._initForm();
  },

  _initForm() {
    const storyForm = document.querySelector('form');

    storyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.target.classList.add('was-validated');

      this._sendPost();
    });
  },

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      this._showSucessModal();
    }
  },

  _getFormData() {
    const descriptionInput = document.getElementById('validationCustomDescription');
    const photoInput = document.getElementById('validationCustomPhoto');
    return {
      description: descriptionInput.value,
      photo: photoInput.files[0],
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => !item);

    return formDataFiltered.length === 0;
  },

  _showSucessModal() {
    const modalElem = document.querySelector('modal-alert');
    modalElem.setAttribute('title', 'Horeey');
    modalElem.setAttribute('body', 'Success post your story');
    modalElem.show();
  },
};

export default Add;
