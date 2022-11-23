import { addStuff } from '..';

describe('First Test', () => {
  test('addStuff', () => {
    const result = addStuff(5, 5);
    expect(result).toBe(10);
  });
});
