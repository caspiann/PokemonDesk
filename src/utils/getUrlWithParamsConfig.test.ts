import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Should get two arguments: "getPokemons", empty object, and return objects with fields: pathname, protocol, host, and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Should get two arguments: "getPokemons", {name: "Pikachu"}, and return objects with fields: pathname, protocol, host, and query with field: name = Pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('Should get two arguments: "getPokemon", {id: 25}, and return objects with fields: pathname, protocol, host, and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
