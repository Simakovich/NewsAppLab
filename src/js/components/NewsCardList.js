export class NewsCardList {
  constructor(options) {
    this.container = options.container;
    this.createCard = options.createCard;
  }

  addCard (card) {
    this.container.appendChild(this.createCard(card))
  }
  render (firstCard,lastCard,cards)  {
    cards.slice(firstCard,lastCard).forEach((card) => {
      this.addCard(card)
    })
  }
}