import { useCallback, useEffect, useState } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (method === "GET") {
      try {
        setLoading(true);
        const response = await fetch(url, signal);
        const data = await response.json();
        setData(data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err);
      }
    }
    if (method === "DELETE") {
      try {
        setLoading(true);
        await fetch(url, signal);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err);
      }
    }
  }, [url, method]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [fetchData]);

  return { data, error, loading };
};

export default useFetch;
