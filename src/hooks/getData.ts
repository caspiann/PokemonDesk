import { useEffect, useState } from 'react';
import req from '../utils/request';

interface TotalData {
  total: number;
  count: number;
  offset: number;
  limit: string;
  pokemons: [];
}

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<TotalData>({ count: 0, limit: '', offset: 0, pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);
        setData(result);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
