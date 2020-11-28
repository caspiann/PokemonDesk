import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Should get one argument', () => {
    const funcParams = toCapitalizeFirstLetter.length;

    expect(funcParams).toBe(1);
  });
  test('Should return word with capitalized first letter', () => {
    const capitalizedWord = toCapitalizeFirstLetter('cat');

    expect(capitalizedWord).toEqual('Cat');
  });
});
