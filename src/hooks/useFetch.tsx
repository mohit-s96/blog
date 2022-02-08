import { useCallback } from "react";
import { useEffect, useState, useRef } from "react";
import { getUri } from "../../util/misc";

type Fetch = (
  uri: string,
  body?: string,
  abort?: AbortController
) => Promise<any>;
type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

const baseURL = getUri("query");

function cacheToLocalStorage(path: string, data: any, params?: string) {
  params = params || "";
  const withTimestamp = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(path + params, JSON.stringify(withTimestamp));
}

/**
 *
 * @param path path which gets appeneded to base uri. Eg. * /api/list *
 * @param fetcher a function which returns promise with the response data. this function will be called with the full url constructed from *path parameter*
 * @param cache boolean value sppecifying whether to cache api response
 * @param cacheDuration number in seconds specifying the duration after which cache is marked as stale, if cache is true and cacheDuration isn't specified then 25 seconds is used as default
 * 
 * @returns fetchResource
 * function for fetching the data
 * 
 * @returns data
 
 * response data @type inferred
 * @returns loading
 *
 * fetching data in progress @type boolean
 * @returns error
 *
 * error in fetching results @type boolean
 */
export function useFetch<F extends Fetch>(
  path: string,
  fetcher: F,
  cache?: boolean,
  cacheDuration?: number //number in seconds
) {
  let isMounted = useRef(true);
  const [data, setData] = useState<Await<ReturnType<F>>>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const currentAbortRef = useRef<AbortController | null>(null);
  const lastAbortRef = useRef<AbortController | null>(null);

  const executeFetch = useCallback((body?: string) => {
    lastAbortRef.current = currentAbortRef.current;
    currentAbortRef.current = new AbortController();
    setData(undefined);
    const url = baseURL + path;
    setLoading(true);
    try {
      fetcher(url, body, currentAbortRef.current)
        .then((res) => {
          if (isMounted.current) {
            setError("");
            setLoading(false);
            setData(res);
          }
          if (cache) cacheToLocalStorage(path, res, body);
        })
        .catch((err) => {
          if (isMounted.current) {
            if (!lastAbortRef.current?.signal.aborted) {
              setLoading(false);
            }
            setError(err.message || "something went wrong");
          }
        });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResource = useCallback((body?: string) => {
    if ((cache !== undefined && cache === false) || cache === undefined) {
      executeFetch(body);
    } else {
      try {
        setLoading(true);

        const staleData = localStorage.getItem(path + body);

        if (!staleData) {
          executeFetch(body);
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
              executeFetch(body);
            }
          }
        }
      } catch (err: any) {
        if (isMounted.current) {
          setLoading(false);
          setError(err);
        }
      }
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    fetchResource,
    data,
    error,
    loading,
    currentAbortRef,
  };
}
