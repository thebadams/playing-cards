const Card = require('./Card');
describe('Card Class', () => {
  test('Class Should work with new keyword', () => {
    const newCard = new Card()
    expect(newCard).toBeInstanceOf(Card);

  })
  test('Card Class Should Have A Suit', () => {
    const newCard = new Card('Diamonds');
    expect(newCard).toHaveProperty('suit', 'Diamonds');
  })
  test('Card Class Should Have A Type', () => {
    const newCard = new Card('Diamonds', 'King');
    expect(newCard).toHaveProperty('suit', 'Diamonds');
    expect(newCard).toHaveProperty('type', 'King');
  })
})