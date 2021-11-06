const Card = require('./Card');
describe('Card Class', () => {
  test('Class Should work', () => {
    const newCard = new Card()
    expect(newCard).toBeInstanceOf(Card);

  })
  test.todo('Card Class Should Have A Suit')
  test.todo('Card Class Should Have A Type')
})