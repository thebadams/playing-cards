const types = require('./type')
describe('type.js', () => {
  test('type should be an array', () => {
    expect(Array.isArray(types)).toBe(true)
  })
  test('suits array should have a length of 4', () => {
    expect(types.length).toEqual(13);
  })
  test('suits array should include all four suits', () => {
    const expected = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
    expect(types).toEqual(expected)
  })
})