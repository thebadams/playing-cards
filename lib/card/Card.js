class Card {
  constructor(suit, type) {
    this.suit = suit;
    this.type = type;
  }
  get cardInfo() {
    return this.getCardInfo();
  }
  getCardInfo() {
    return `${this.type} of ${this.suit}`
  }
}

module.exports = Card;