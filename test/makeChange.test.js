import makeChange from '../src/makeChange';

test('拿200元买120块商品，预期会找零80元~', () => {
  expect(makeChange(200, 120)).toBe(80);
});
