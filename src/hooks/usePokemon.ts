import { useEffect, useState } from 'react';

interface TotalData {
  total: number;
  count: number;
  offset: number;
  limit: string;
  pokemons: [];
}

const usePokemons = () => {
  const [data, setData] = useState<TotalData>({ count: 0, limit: '', offset: 0, pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=30');
        const result = await response.json();
        setData(result);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

export default usePokemons;
