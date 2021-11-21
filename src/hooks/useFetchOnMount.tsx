import { useCallback } from "react";
import { useEffect, useState, useRef } from "react";
import { getUri } from "../../util/misc";

type Fetch = (uri: string) => Promise<any>;
type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

const baseURL = getUri();

function cacheToLocalStorage(path: string, data: any) {
  const withTimestamp = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(path, JSON.stringify(withTimestamp));
}

/**
 *
 * @param path path which gets appeneded to base uri. Eg. * /api/list *
 * @param fetcher a function which returns promise with the response data. this function will be called with the full url constructed from *path parameter*
 * @param cache boolean value sppecifying whether to cache api response
 * @param cacheDuration number in seconds specifying the duration after which cache is marked as stale, if cache is true and cacheDuration isn't specified then 25 seconds is used as default
 * @returns data
 *
 * response data @type inferred
 * @returns loading
 *
 * fetching data in progress @type boolean
 * @returns error
 *
 * error in fetching results @type boolean
 */
export function useFetchOnMount<F extends Fetch>(
  path: string,
  fetcher: F,
  cache?: boolean,
  cacheDuration?: number //number in seconds
) {
  let isMounted = useRef(true);
  const [data, setData] = useState<Await<ReturnType<F>>>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const executeFetch = useCallback(() => {
    const url = baseURL + path;
    setLoading(true);
    fetcher(url)
      .then((res) => {
        if (isMounted.current) {
          setLoading(false);
          setData(res);
        }

        cacheToLocalStorage(path, res);
      })
      .catch(() => {
        if (isMounted.current) {
          setLoading(false);
          setError(true);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isMounted.current = true;
    if ((cache !== undefined && cache === false) || cache === undefined) {
      executeFetch();
    } else {
      try {
        setLoading(true);

        const staleData = localStorage.getItem(path);

        if (!staleData) {
          executeFetch();
        } else {
          if (isMounted.current) {
            let defaultCacheTime = 25;
            let cacheTime = cacheDuration || defaultCacheTime;
            cacheTime = cacheTime * 1000;
            const dataObject = JSON.parse(staleData);
            const previousCacheTime = dataObject.timestamp;
            const currentTime = Date.now();

            if (currentTime - previousCacheTime < cacheTime) {
              setLoading(false);

              setData(dataObject.data);
            } else {
              executeFetch();
            }
          }
        }
      } catch {
        if (isMounted.current) {
          setLoading(false);
          setError(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    data,
    error,
    loading,
  };
}
