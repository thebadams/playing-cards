const Deck = require('./Deck')
const Card = require('../Card/Card.js')

describe('Deck Class', () => {
  test('new Deck should return a new instance of the Deck Class', () => {
    const newDeck = new Deck();
    expect(newDeck).toBeInstanceOf(Deck);
  })
  test('Deck Should Have a property, cards, that is an array of Cards', () => {
    const newDeck = new Deck();
    expect(newDeck).toHaveProperty('cards');
    expect(Array.isArray(newDeck.cards)).toBe(true);
    expect(newDeck.cards.every((el) => expect(el).toBeInstanceOf(Card)));
    expect(newDeck.cards.length).toBe(52)
  });
  test.todo('Deck Should Have a method, shuffle, that changes the order of Cards')
})