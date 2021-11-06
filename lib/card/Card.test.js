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
  test('Card Class Should have A method, cardInfo', () => {
    const newCard = new Card('Diamonds', 'King');
    expect(newCard).toHaveProperty('getCardInfo')
    const cardInfo = newCard.getCardInfo()
    expect(cardInfo).toBe(`${newCard.type} of ${newCard.suit}`);
  })
})