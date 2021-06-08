export class NewsCard {
  constructor(card,createDateToCard,checkImgUrl) {
    this.card = card
    this.createDateToCard = createDateToCard
    this.checkImgUrl = checkImgUrl
  }

  create() {
    const template = document.querySelector('#NewsCard').content.querySelector('.card');
    const newCard = template.cloneNode(true);
    this.cardElement = newCard;
    this.title = this.cardElement.querySelector('.card__title');
    this.image = this.cardElement.querySelector('.card__img');
    this.cardDate = this.cardElement.querySelector('.card__date');
    this.cardLink = this.cardElement.querySelector('.card__link');
    this.cardSource = this.cardElement.querySelector('.card__source');
    this.description = this.cardElement.querySelector('.card__paragraph');

    this.title.textContent = this.card.title;
    this.cardDate.textContent = this.createDateToCard(this.card.publishedAt)
    this.cardLink.href = this.card.url
    this.cardSource.textContent = this.card.source.name
    this.description.textContent = this.card.description

    this.checkImgUrl(this.image,this.card.urlToImage)

    return newCard
  }

}