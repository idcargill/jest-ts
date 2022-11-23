import { addStuff } from '../..';

describe('Nested test folder', () => {
  test('Test 1', () => {
    const result = addStuff(3, 3);
    expect(result).toBe(6);
  });
});
