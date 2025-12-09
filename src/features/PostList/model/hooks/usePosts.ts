import { useState, useEffect } from "react";
import { useLoading } from "../../../../shared/contexts/LoadingContext";

export function usePosts<T>(url: string) {
  const { setLoading } = useLoading();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let cancelled = false;

    console.log('test');    

    async function load() {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e) {
        console.error("Fetch error:", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => { cancelled = true; };
  }, [url, setLoading]);

  return data;
}
