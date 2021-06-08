export class SetFormButtonState {
  constructor(button) {
    this._button = button
  }

  addClass() {
    this._button.disabled = true
    this._button.classList.add('form__button_disabled')
  }

  removeClass() {
    this._button.removeAttribute('disabled');
    this._button.classList.remove('form__button_disabled')
  }
}