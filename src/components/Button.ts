import { type Weather } from '../interfaces'

export class Button {
  protected _button: HTMLButtonElement

  constructor () {
    this._button = document.createElement('button')
    this._button.className = 'btn'
  }

  get button (): HTMLButtonElement {
    return this.button
  }
}

export class ButtonImg extends Button {
  private readonly data: Weather

  constructor (data: Weather) {
    super()
    this.data = data
  }

  get buttonImg (): HTMLButtonElement {
    this._button.style.backgroundImage = `url(${this.data.bg})`
    this._button.style.backgroundSize = 'cover'
    this._button.innerHTML = this.data.icon
    this._button.id = `btn-${this.data.id}`

    return this._button
  }
}
