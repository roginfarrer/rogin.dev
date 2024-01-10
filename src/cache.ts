export const cache = new Map<string, any>(
  JSON.parse(localStorage.getItem("app-cache") || "[]"),
);

interface StoredData<T> {
  timestamp: number;
  data: T;
}

export const cachedFetch = async <T>(
  endpoint: RequestInfo | URL,
  opts: { fetchOptions?: ResponseInit; duration: number },
): Promise<T> => {
  const key = endpoint.toString();
  const cachedResponse = cache.get(key) as StoredData<T>;

  const now = new Date().getTime();
  if (cachedResponse && now - cachedResponse.timestamp < opts.duration) {
    return cachedResponse.data;
  }

  const response = await fetch(endpoint, opts.fetchOptions);
  const data = await response.json();

  const payload = {
    timestamp: new Date().getTime(),
    data,
  } satisfies StoredData<T>;

  if (response.status > 200) {
    return data;
  }

  cache.set(key, payload);

  syncCacheToLocalStorage();

  return data as T;
};

function syncCacheToLocalStorage() {
  const appCache = JSON.stringify(Array.from(cache.entries()));
  localStorage.setItem("app-cache", appCache);
}

window.addEventListener("beforeunload", syncCacheToLocalStorage);
