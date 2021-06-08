export class FormValidator {
  constructor(options) {
    this.form = options.form
    this.error = options.error
    this.setFormButtonState = options.setFormButtonState
  }

  _checkInputValidity(inputElement) {
    const item = inputElement
    const errorElement = item.nextElementSibling
    if (item.validity.valueMissing) {
      errorElement.textContent = this.error
      item.classList.add('form__input_type_error')
      return false
    }
    errorElement.textContent = ''
    item.classList.remove('form__input_type_error')
    return true
  }

  _handleValidate (event) {
    this._checkInputValidity(event.target)
    this._setSubmitButtonState()
  }

  _setSubmitButtonState() {
    let isValidForm = true;
    const btn = this.form.querySelector('.form__button')
    const input = this.form.querySelector('.form__input')

    if (!input.checkValidity()) isValidForm = false

    if (isValidForm) {
      this.setFormButtonState.removeClass(btn)
    } else {
      this.setFormButtonState.addClass(btn)
    }
  }

  formValidity() {
    this._setSubmitButtonState()
    this.form.addEventListener('input', this._handleValidate.bind(this))
  }
}