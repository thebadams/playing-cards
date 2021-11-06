const Card = require('./Card');
describe('Card Class', () => {
  test('Class Should work', () => {
    const newCard = new Card()
    expect(newCard).toBeInstanceOf(Card);

  })
  test('Card Class Should Have A Suit', () => {
    const newCard = new Card('Diamonds');
    expect(newCard).toHaveProperty('suit', 'Diamonds');
  })
  test.todo('Card Class Should Have A Type')
})