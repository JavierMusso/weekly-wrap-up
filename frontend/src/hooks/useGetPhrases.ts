import { useCallback, useState } from 'react';
import { GetPhrasesParams, PaginatedResponse, Phrase } from './types';

const baseUrl = 'https://weekly-wrap-up-1.onrender.com';

export const useGetPhrases = () => {
  const [data, setData] = useState<PaginatedResponse<Phrase>[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const get = useCallback(async (params?: GetPhrasesParams) => {
    const p = {
      limit: params?.limit?.toString(),
      page: params?.page?.toString(),
      search: params?.search,
    };

    setIsLoading(true);

    const query = new URLSearchParams(
      Object.entries(p)
        .filter(([_, v]) => v !== undefined && v !== '')
        .reduce(
          (acc, [k, v]) => (v !== undefined ? { ...acc, [k]: v } : acc),
          {} as Record<string, string>
        )
    ).toString();

    try {
      const response = await fetch(
        `${baseUrl}/phrases${query ? `?${query}` : ''}`
      ).then((res) => res.json());

      setData(response);
    } catch (e: any) {
      setError(e);
    }
    setIsLoading(false);
  }, []);

  return { data, isLoading, error, get };
};
