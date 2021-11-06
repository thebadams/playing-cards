const Card = require('../Card/Card.js')
const suits = require('../constants/suits/suits');
const types = require('../constants/type/type')

class Deck {
  constructor() {
    let cards = []
    suits.forEach((suit)=> {
      types.forEach((type) => {
        let newCard = new Card(suit, type)
        cards.push(newCard)
      })
    })
    this.cards = cards;
  }
}

module.exports = Deck;