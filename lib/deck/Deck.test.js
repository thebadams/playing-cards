const Deck = require('./Deck')

describe('Deck Class', () => {
  test('new Deck should return a new instance of the Deck Class', () => {
    const newDeck = new Deck();
    expect(newDeck).toBeInstanceOf(Deck);
  })
  test.todo('Deck Should Have a property, cards, that is an array of Cards');
  test.todo('Deck Should Have a method, shuffle, that changes the order of Cards')
})