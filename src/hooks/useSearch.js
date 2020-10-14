import { useEffect, useState } from "react";

import * as Service from "../services/";

export default function useSearch(
  functionName,
  searchText = "",
  interval = 500
) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      (async function fetchColleges() {
        try {
          const apiFunction = Service[functionName];

          if (!apiFunction) return;

          const { data } = await apiFunction(searchText);
          setData(() => [...data]);
        } catch (err) {
          setData([]);
        } finally {
          setLoading(false);
        }
      })();
    }, interval);

    return () => clearTimeout(timer);
  }, [searchText]);

  return { data, loading };
}
