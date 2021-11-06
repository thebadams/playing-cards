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
  shuffle() {
    const array = this.cards
    const shuffledCards = []
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
    return this.cards
    }

 
    
}

const newDeck = new Deck()
let oldCards = newDeck.cards
console.log('Original Cards:', oldCards)
newDeck.shuffle()
let newCards = newDeck.cards;
console.log('New Cards', newCards)

module.exports = Deck;