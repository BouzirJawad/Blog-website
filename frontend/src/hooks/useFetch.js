import { useEffect, useState } from 'react';

export const useFetch = (observable$) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const subscription = observable$.subscribe({
      next: (res) => setData(res),
      error: (err) => setError(err),
    });
    return () => subscription.unsubscribe();
  }, [observable$]);

  return { data, error };
};
