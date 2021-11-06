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
  test('Deck Should Have a method, shuffle, that changes the order of Cards', () => {
    const newDeck = new Deck();
    expect(newDeck).toHaveProperty('shuffle')
    let originalCards = newDeck.cards;
    expect(originalCards.length).toBe(52)
    let newCards = newDeck.shuffle();
    expect(Array.isArray(newCards)).toBe(true);
    expect(newCards.every((card) => expect(card).toBeInstanceOf(Card)));
    expect(newCards.length).toBe(52);
    // expect(newCards).not.toBe(originalCards);
    // expect(newCards).toEqual(expect.arrayContaining(originalCards)).toBe(true)

  })
  test('Deck Should Have a Method, remove that removes the first card from the cards array', () => {
    const newDeck = new Deck();
    let originalCardsLength = newDeck.cards.length;
    let expectedCardsArray = [];
    for (let i = 1; i < originalCardsLength -1; i++) {
      expectedCardsArray.push(newDeck.cards[i]);
    }
    expect(newDeck).toHaveProperty('removeCard');
    newDeck.removeCard();
    let newCards = newDeck.cards;
    let newCardsLength = newCards.length;
    expect(newCardsLength).toEqual(oldCardsLength - 1)
    expect(newCards).toEqual(expectedCardsArray);

  })
})