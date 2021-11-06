const suits = require('./suits')
describe('suits.js', () => {
  test('suits should be an array', () => {
    expect(Array.isArray(suits)).toBe(true)
  })
  test('suits array should have a length of 4', () => {
    expect(suits.length).toEqual(4);
  })
  test('suits array should include all four suits', () => {
    const expected = ['Diamonds', 'Spades', 'Hearts', 'Clovers']
    expect(suits).toEqual(expected)
  })
})